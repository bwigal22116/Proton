var options = {};
(function (options) {
    var uri = new pc.URI(window.location.href);
    var query = uri.getQuery();

    pc.config = pc.config || {};
    pc.config['frame'] = {
        url: window.location.href
    };
    pc.extend(options, {
        useApi: false,
        repository: pc.string.toBool(query.repository),
        scriptPrefix: "",
        displayLoader: (query.loader && query.loader === 'debug')
    });
}(options));
