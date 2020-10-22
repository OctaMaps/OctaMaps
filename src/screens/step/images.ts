const Images={
    F:  {
        totalFloor: 2,
        level: [
            require("../../images/Level/BlocoF0.jpg"), 
            require("../../images/Level/BlocoF1.jpg"), 
        ],
        touchable: {
            haveSteps: false,
            pisos: {
                piso1: [
                    { 
                        left: 0,
                        top: 0,
                        height: 0,
                        top: 0,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    }
                ],
                piso2: [
                    {
                        left: 0,
                        top: 0,
                        height: 0,
                        top: 0,
                        transform: {
                            rotateY: 0,
                            rotateZ: 0
                        }
                    }
                ]
            }
        }
    },
    E: {
        totalFloor: 3,
        level: [
            require("../../images/Level/BlocoETerreo.jpg"),
            require("../../images/Level/BlocoEP1.jpg"),
            require("../../images/Level/BlocoEP2.png")
        ],
        
    },
    D: {
        totalFloor: 2,
        level: [
            require("../../images/Level/BlocoDTerreo.jpg"),
            require("../../images/Level/BlocoDP1.jpg")
        ]
    },
    C: {
        totalFloor: 2,
        level: [
            require("../../images/Level/BlocoCTerreo.jpg"),
            require("../../images/Level/BlocoCP1.jpg")
        ]
    },
    A: {
        totalFloor: 3,
        level: [
            require("../../images/Level/BlocoATerreo.jpg"),
            require("../../images/Level/BlocoAP1.jpg"),
            require("../../images/Level/BlocoAP2.png")
        ]
    },
    B: {
        totalFloor: 3,
        haveSteps: true,
        level: [
            {   
                totalStep: 3,
                step: [
                    require("../../images/Level/BlocoBTerreo1.jpg"),
                    require("../../images/Level/BlocoBTerreo2.jpg"),
                    require("../../images/Level/BlocoBTerreo3.jpg")
                ]
            },
            {   
                totalStep: 4,
                step: [
                    require("../../images/Level/BlocoB1P1.jpg"),
                    require("../../images/Level/BlocoB2P1.jpg"),
                    require("../../images/Level/BlocoB3P1.jpg"),
                    require("../../images/Level/BlocoB4P1.jpg"),
                ],
                inverted: true
            },
            {
                totalStep: 5,
                step: [
                    require("../../images/Level/BlocoB1P2.png"),
                    require("../../images/Level/BlocoB2P2.png"),
                    require("../../images/Level/BlocoB3P2.png"),
                    require("../../images/Level/BlocoB4P2.png"),
                    require("../../images/Level/BlocoB5P2.png"),
                ]
            },
        ]
    }
    
}
export default Images;