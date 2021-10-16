const rewire = require("rewire")
const ProductListPage = rewire("./ProductListPage")
const mapStateToProps = ProductListPage.__get__("mapStateToProps")
const mapDispatchToProps = ProductListPage.__get__("mapDispatchToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = ["Ball", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Bacon"]
        let object3 = ["Shoes", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object4 = [object, object2, object3]
        let callFunction = () => {
            mapStateToProps({ products: object4 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = ["Hat", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object4 = [object, object2, object3]
        let callFunction = () => {
            mapStateToProps({ products: object4 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Mouse", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = ["Hat", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Hat"]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Mouse"]
        let object4 = [object, object2, object3]
        let callFunction = () => {
            mapStateToProps({ products: object4 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Ball"]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], "Mouse", ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object4 = [object, object2, object3]
        let callFunction = () => {
            mapStateToProps({ products: object4 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object2 = [["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"], ["Bacon", "Mouse", "Ball", "Hat", "Shoes"]]
        let object3 = [object, ["Shoes", "Mouse", "Hat"], object2]
        let callFunction = () => {
            mapStateToProps({ products: object3 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapDispatchToProps", () => {
    test("0", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            mapDispatchToProps(() => "Anas", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            mapDispatchToProps(() => "Edmond", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            mapDispatchToProps(() => "Michael", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            mapDispatchToProps(() => "George", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()"]]
        let callFunction = () => {
            mapDispatchToProps(() => "Pierre Edouard", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapDispatchToProps(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
