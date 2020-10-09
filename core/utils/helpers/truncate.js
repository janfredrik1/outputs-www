module.exports.truncate = (str, maxLen, separator = ' ') => {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen)).replace(/<(?:.|\n)*?>/gm, '') + '…';
}
