pc.script.create('storage', function (context) {
    var Storage = function (entity) {
        this.entity = entity;    
        this.storageSupported = false;
    };

    Storage.prototype = {
        store: function (key, value) {
            if (this.storageSupported) {
                localStorage.setItem('swooop' + key, value);
            }
        },

        loadString: function (key, defaultValue) {
            return this.storageSupported ? localStorage['swooop' + key] : defaultValue;
        },

        loadNumber: function (key, defaultValue) {
            var value = defaultValue;
            if (this.storageSupported) {
                var key = 'swooop' + key;
                if (key in localStorage) {
                    value = Number(localStorage[key]);
                    // firefox seems to make this NaN for some reason
                    if (isNaN(value)) {
                        value = defaultValue;
                    }
                }
            }

            return value;
        }
    };

   return Storage;
});