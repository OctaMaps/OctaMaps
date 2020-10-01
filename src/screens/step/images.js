const Images={
    F:  {
        totalFloor: 2,
        level: [
            require("../../images/Level/BlocoF0.jpg"), 
            require("../../images/Level/BlocoF1.jpg"), 
        ]
    },
    E: {
        totalFloor: 3,
        level: [
            require("../../images/Level/BlocoETerreo.jpg"),
            require("../../images/Level/BlocoEP1.jpg"),
            require("../../images/Level/BlocoEP2.png")
        ]
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
    B: {
        totalFloor: 3,
        level: [
            { 
                totalStep: 4,
                step: [
                    require("../../images/Level/BlocoB1P1.jpg"),
                    require("../../images/Level/BlocoB2P1.jpg"),
                    require("../../images/Level/BlocoB3P1.jpg"),
                    require("../../images/Level/BlocoB4P1.jpg"),
                ]
            },
            {
                totalStep: 3,
                step: [
                   
                    
                ]
            },
            {
                
            }
        ]
    }
    
}
export default Images;