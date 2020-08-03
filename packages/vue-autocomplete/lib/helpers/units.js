'use babel'

export default {
    clone: function (obj) {
        let newObj = {}
        for (let key in obj) {
            newObj[key] = obj[key]
        }
        newObj.rightLabelHTML = 'vue.js'

        return newObj
    }
}
