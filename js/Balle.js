//Classe de création d'un objet balle
class Balle {
    /**
     *
     * @param $element
     */
    constructor($element) {
        this.$element = $element;

        /**
         *
         * @type {number}
         */
        this.hauteur = $element.height();
        /**
         *
         * @type {number}
         */
        this.largeur = $element.width();
        /**
         *
         * @type {number}
         */
        this.positionX = parseInt($element.css("left"));
        /**
         *
         * @type {number}
         */
        this.positionY = parseInt($element.css("top"));
        /**
         *
         * @type {number}
         */
        this.vitesseX = 2;
        /**
         *
         * @type {number}
         */
        this.vitesseY = 0.5;
        /**
         *
         * @type {number}
         */
        this.angle = Math.random() * 2 * Math.PI;
    }

    /**
     *
     * @returns {number}
     */
    get bas() {
        return this.positionY + this.hauteur;
    }

    /**
     *
     * @param value
     */
    set bas(value) {
        this.positionY = value - this.hauteur;
    }

    /**
     *
     * @returns {number}
     */
    get droite() {
        return this.positionX + this.largeur;
    }

    /**
     *
     * @param value
     */
    set droite(value) {
        this.positionX = value - this.largeur;
    }

    bouger() {
        this.positionX += Math.cos(this.angle) * this.vitesseX;
        this.positionY += Math.sin(this.angle) * this.vitesseY;

        this.limite();
        this.majHTML();
    }

    limite() {
        //droite
        if ((this.droite) > terrain.largeur) {
            this.droite = terrain.largeur;
            this.vitesseX *= -1;
        }
        //gauche
        if (this.positionX < 0) {
            this.positionX = 0;
            this.vitesseX *= -1;
        }
        //bas
        if (this.bas > terrain.hauteur) {
            terrain.tiltBas();
            this.bas = terrain.hauteur;
            this.vitesseY *= -1;
        }
        //haut
        if (this.positionY < 0) {
            terrain.tiltHaut();
            this.positionY = 0;
            this.vitesseY *= -1;
        }
    }

    majHTML() {
        this.$element.css("left", balle.positionX);
        this.$element.css("top", balle.positionY);
    }
}