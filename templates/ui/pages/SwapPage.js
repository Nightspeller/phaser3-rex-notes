import Container from '../container/Container.js';

var SwapPage = function (key) {
    this._previousKey = this._currentKey;
    var prevoiusPage = this.previousPage;
    if (prevoiusPage) {
        if (this.swapMode === 0) { // Invisible
            Container.prototype.setChildVisible.call(this, prevoiusPage, false);
            this.emit('pageinvisible', prevoiusPage, this._previousKey, this);
        } else { // Destroy
            prevoiusPage.destroy();
        }
    }

    if (key && !this.sizerChildren.hasOwnProperty(key)) {
        this.emit('createpage', key, this);
    }

    this._currentKey = key;
    var currentPage = this.currentPage;
    if (currentPage) {
        Container.prototype.setChildVisible.call(this, currentPage, true);
        this.emit('pagevisible', currentPage, this._currentKey, this);
    }
    return this;
}

export default SwapPage;