(function ($) {
  var _loadThen = $.fn.loadThen;

  /**
   * An alternative to jQuery's ajax load() function that has the same interface
   * except it does not take a callback function, but instead it returns a promise.
   * The promise will be resolved when the content are loaded into the set of matched elements.
   * @param url {string} A string containing the URL to which the request is sent.
   * @param params {object or string} A plain object or string that is sent to the server with the request.
   * @returns {jQuery Promise} with params (html, status, jqXHR).
   * When the promise is resolved, functions The [this] object is the set of matched elements.
   */
  $.fn.loadThen = function (url, params) {
    if (typeof url !== "string" && _loadThen) {
      return _loadThen.apply(this, arguments);
    }

    if (this.length <= 0) {
      return jQuery.Deferred().resolveWith(this, [""]);
    }

    var selector,
      type,
      response,
      self = this,
      off = url.indexOf(" ");

    if (off >= 0) {
      selector = jQuery.trim(url.slice(off));
      url = url.slice(0, off);
    }

    if (params && typeof params === "object") {
      type = "POST";
    }

    return jQuery
      .ajax({
        url: url,
        type: type,
        dataType: "html",
        data: params,
      })
      .then(function (responseText) {
        self.html(
          selector
            ? jQuery("<div>")
                .append(jQuery.parseHTML(responseText))
                .find(selector)
            : responseText
        );
        return self;
      });
  };
})(jQuery);
