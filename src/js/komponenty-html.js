/**
 * Created by CISOW on 15.12.2016.
 */
window.addEventListener('HTMLImportsLoaded', function () {
    var link = document.querySelector('link[rel=import]');

    /** wariant 1 */
    var content = link.import;
    var el = content.querySelector('.sekcja-nav-menu');
    document.body.appendChild(el.cloneNode(true));

    /** wariant 2 */
    /** var content = link.import.querySelector('.sekcja-nav-menu');
    * document.body.appendChild(document.importNode(content, true));
    */
});
