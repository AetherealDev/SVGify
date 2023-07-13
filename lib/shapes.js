class CircleLogo {
    constructor(shapeColor, textColor, logoText) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.logoText = logoText;
    }

    generateSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" dominant-baseline="central">${this.logoText}</text>
    </svg>`;
    }
}

class TriangleLogo {
    constructor(shapeColor, textColor, logoText) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.logoText = logoText;
    }

    generateSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <polygon points="50,10 90,90 10,90" fill="${this.shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" dominant-baseline="central">${this.logoText}</text>
    </svg>`;
    }
}

class SquareLogo {
    constructor(shapeColor, textColor, logoText) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.logoText = logoText;
    }

    generateSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" dominant-baseline="central">${this.logoText}</text>
    </svg>`;
    }
}


// export the classes
module.exports = {
    CircleLogo,
    TriangleLogo,
    SquareLogo,
}
