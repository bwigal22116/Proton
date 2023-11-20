pc.extend(pc, function () {
    var CANVAS_ID = 'application-canvas';
    var CONTAINER_ID = 'application-container';

    /**
    * @name pc.fw.Bootstrap
    * @class 
    * @description Bootstrap class is used to start up the application from either an export or from the Designer via the API.
    * @param {Object} options
    * @param {String} options.username Username of the currently authenticated user
    * @param {String} options.depotName Name of the depot to load the application from
    * @param {Boolean} options.useApi If true then authenticate to the API and load content data from there.
    * @param {Boolean} options.displayLoader If true then show debug loading info
    * @param {Boolean} options.repository If true then override the prefix to script urls for the current repository
    * @param {scriptPrefix} options.scriptPrefix Prefix for script urls
    */
    var Bootstrap = function (options) {
        options = options || {};

        var url = new pc.URI(window.location.href);
        this.url = url.toString();
        this.query = url.getQuery();

        this.element = options['element'] || document.body; 
    
        this.username = options.username;
        this.depotName = options.depotName;        
        this.useApi = options.useApi;
        this.displayLoader = options.displayLoader;
        this.repository = options.repository;
        this.scriptPrefix = options.scriptPrefix;

        this.mouse = null;
        this.keyboard = null;
        this.gamepads = null;

        this.container = null;
        this.canvas = null;

        this.libraries = [];

        this._createCanvas();
        this._createInputDevices();

        pc.extend(this, pc.events);
    };

    Bootstrap.prototype = {
        /**
        * @function
        * @name pc.fw.Bootstrap#start
        * @description Start the application
        */
        start: function (packId) {
            if (this.useApi) {
                this._startFromDesigner(packId);
            } else {
                this._start(pc.content);
            }
        },

        _createApplication: function (content) {
            // create application object
            try {
                this.application = new pc.fw.Application(this.canvas, {
                    content: content,
                    depot: this.depot,
                    keyboard: this.keyboard,
                    mouse: this.mouse,
                    touch: this.touch,
                    gamepads: this.gamepads,
                    displayLoader: this.displayLoader,
                    libraries: content.appProperties['libraries'],
                    scriptPrefix: this.scriptPrefix,
                    cache: !this.useApi
                });
                // Configure resolution and resize event
                this.application.setCanvasResolution(this.appProperties['resolution_mode'], this.appProperties['width'], this.appProperties['height']);
                this.application.setCanvasFillMode(this.appProperties['fill_mode'], this.appProperties['width'], this.appProperties['height']);
                window.addEventListener('resize', this._onWindowResize.bind(this), false);
                this._onWindowResize();

                this.application.loadFromToc('default', function () {
                    // show canvas
                    this.canvas.style.visibility = 'visible';
                    this.canvas.focus();

                    // start update loop
                    this.application.start();

                    this.fire('loaded');
                }.bind(this), function (errors) {
                    this.fire('error', errors);
                }.bind(this), function (value) {
                    this.fire('progress', value);
                }.bind(this));
            } catch (e) {
                if (e instanceof pc.gfx.UnsupportedBrowserError) {
                   this._displayError('This page requires a browser that supports WebGL.<br/>' + 
                    '<a href="http://get.webgl.org">Click here to find out more.</a>');
                } else if (e instanceof pc.gfx.ContextCreationError) {
                    this._displayError("It doesn't appear your computer can support WebGL.<br/>" +
                    '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>');
                }
            }
        },

        _start: function (content) {
            this.appProperties = content.appProperties;
            this._createApplication(content);
        },

        _startFromDesigner: function (packId) {
            var self = this;
            self.server = new pc.common.Corazon(pc.config['api_url'], pc.config['corazon']);

            self.server.authorize(self.username, function () {
                self.server.users.getOne(self.username, function (user) {
                    user.depots.getOne(self.depotName, function (depot) {
                        self.depot = depot;

                        depot.getContent(packId, function (content) {
                            pc.content = new pc.fw.ContentFile(content);
                            self.appProperties = pc.content.appProperties;
                            depot.repositories.getOne('active', function (repository) {
                                // If there is a code repository enabled, replace localhost prefix with the code repository location
                                if (self.repository) {
                                    self.scriptPrefix = pc.path.join(self.server.baseUrl, repository.url);
                                }
                                self._createApplication(pc.content);
                            }, function (errors) {
                                // No code repository
                                self._createApplication(pc.content);
                            }); 
                        });

                    }, function (errors) {
                        logERROR(errors.join(";"));
                    });
                    
                }, function (errors) {
                    logERROR(errors.join(";"));
                });
            });   
        },


        /**
         * @private
         * @function 
         * @name pc.Bootstrap#_setTitle
         * @description Set the title of the window
         * @param {String} value The value to include in the title in the for "value - PlayCanvas"
         */
        _setTitle: function (value) {
            document.title = pc.string.format('{0} - PlayCanvas', value);
        },
        
        /**
         * @private
         * @function
         * @name pc.Bootstrap#_createCanvas
         * @description Create the container and canvas elements
         */
        _createCanvas: function () {
            this.container = document.createElement('div');
            this.container.setAttribute('id', CONTAINER_ID);
            this.container.style.position = 'relative';

            this.container.style.width = '100%';
            this.container.style.height = '100%';

            this.canvas = document.createElement('canvas');
            this.canvas.setAttribute('id', CANVAS_ID);
            this.canvas.setAttribute('tabindex', 0);
            this.canvas.style.visibility = 'hidden';
            this.canvas.style.width = '100%';
            this.canvas.style.height = '100%';
            
            // Disable I-bar cursor on click+drag
            this.canvas.onselectstart = function () { return false; };
            
            this.container.appendChild(this.canvas);
            this.element.insertBefore(this.container, this.element.firstChild);
        },

        _createInputDevices: function () {
            this.keyboard = new pc.input.Keyboard(this.container);
            this.mouse = new pc.input.Mouse(this.container);
            this.gamepads = new pc.input.GamePads();
            if ('ontouchstart' in window) {
                this.touch = new pc.input.TouchDevice(this.container);
            }
        },

        /**
         * @private
         * @function
         * @name pc.Bootstrap#_displayError
         * @description Show error message if application fails to load
         */
        _displayError: function (html) {
            if (this.container) {
                var block =
                    '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' +
                    '<td align="center">' +
                    '<div style="display: table-cell; vertical-align: middle;">' +
                    '<div style="">' + html + '</div>' +
                    '</div>' +
                    '</td></tr></table>';
                this.container.innerHTML = block;
            }
        },

        /**
         * @function 
         * @name pc.Bootstrap#onWindowResize
         * @description Called when a window resize event is fired if the application is set to fill the window
         */
        _onWindowResize: function () {
            var size = this.application.resizeCanvas(this.canvas.width, this.canvas.height);
            var fillMode = this.application.fillMode;
            if (fillMode === pc.fw.FillMode.KEEP_ASPECT ||  fillMode === pc.fw.FillMode.NONE) {
                var marginTop = (window.innerHeight - size.height) / 2;
                this.container.style.width  = this.canvas.style.width;
                this.container.style.height = this.canvas.style.height;
                this.container.style.margin = marginTop + "px auto";
            } else {
                this.container.style.margin = 'auto auto';
            }
        }
    };

    var ProgressBar = function (element, height) {
        this._element = element;
        this._height = height;
        this._container = null;
        this._bar = null;
        this._value = 0;
    };

    ProgressBar.prototype = {
        attach: function () {
            this._container = document.createElement('div');
            this._container.setAttribute('id', 'progress-container');
            this._container.setAttribute('class', 'pc-progress-container');
            this._container.style.width = '100%';
            this._container.style.height = this._height + 'px';
            this._container.style.position = 'absolute';
            this._container.style.backgroundColor = '#444';

            this._bar = document.createElement('div');
            this._bar.setAttribute('id', 'progress-bar');
            this._bar.setAttribute('class', 'pc-progress-bar');
            this._bar.style.width = '0%';
            this._bar.style.height = '100%';
            this._bar.style.backgroundColor = '#fff';

            this._container.appendChild(this._bar);
            this._element.appendChild(this._container);
        },

        get value() {
            return this._value;
        },

        set value(v) {
            this._value = v;
            this._value = Math.min(1, Math.max(0, this._value));

            this._bar.style.width = this._value * 100 + '%'
        }
    };

    return {
        Bootstrap: Bootstrap,
        ProgressBar: ProgressBar
    }
}());

window.addEventListener('message', function (e) {
    if (e.origin === 'http://apps.playcanvas.com') {
        pc.config['frame'] = JSON.parse(e.data);
    }
}, false);
// Tell parent window w
window.top.postMessage('frame:listening', '*');


var progress = new pc.ProgressBar(document.getElementById('application-progress'), 2);
progress.attach(document.body);

var bootstrap = new pc.Bootstrap(options);
bootstrap.on('progress', function (v) {
    if (v >= progress.value) {
        progress.value = v;    
    }
});
bootstrap.on('loaded', function () {
    var splash = document.getElementById('application-splash');
    splash.parentNode.removeChild(splash);
});
bootstrap.start("5ae86c85-1457-4505-8d2c-d3b712712a21");
