const config = {
    "prset": "High obfuscation, low performance", // chose your own preset you can chose custom and edit the custom section below
    "settings": {
        "High obfuscation, low performance": {
            "target": "node",
            "preset": "high",
            "calculator": true,
            "compact": true,
            "hexadecimalNumbers": true,
            "controlFlowFlattening": 0.5,
            "deadCode": 0.25,
            "dispatcher": true,
            "duplicateLiteralsRemoval": 0.75,
            "flatten": true,
            "globalConcealing": true,
            "identifierGenerator": "randomized",
            "minify": true,
            "movedDeclarations": true,
            "objectExtraction": true,
            "opaquePredicates": 0.75,
            "renameVariables": true,
            "renameGlobals": true,
            "shuffle": true,
            "variableMasking": 0.75,
            "stringConcealing": true,
            "stringCompression": true,
            "stringEncoding": true,
            "stringSplitting": 0.75,
            "astScrambler": true,
            "pack": true
          },
        "Medium obfuscation, optimal performance": {
            "target": "node",
            "preset": "medium",
            "calculator": true,
            "compact": true,
            "hexadecimalNumbers": true,
            "controlFlowFlattening": 0.25,
            "deadCode": 0.1,
            "dispatcher": 0.5,
            "duplicateLiteralsRemoval": 0.5,
            "globalConcealing": true,
            "identifierGenerator": "randomized",
            "minify": true,
            "movedDeclarations": true,
            "objectExtraction": true,
            "renameVariables": true,
            "renameGlobals": true,
            "shuffle": true,
            "variableMasking": 0.5,
            "stringConcealing": true,
            "stringSplitting": 0.25,
            "astScrambler": true,
            "pack": true
          },
        "Low obfuscation, High performance": {
            "target": "node",
            "preset": "low",
            "calculator": true,
            "compact": true,
            "hexadecimalNumbers": true,
            "deadCode": 0.05,
            "dispatcher": 0.25,
            "duplicateLiteralsRemoval": 0.5,
            "identifierGenerator": "randomized",
            "minify": true,
            "movedDeclarations": true,
            "objectExtraction": true,
            "renameVariables": true,
            "renameGlobals": true,
            "stringConcealing": true,
            "astScrambler": true
          }



    }
}


module.exports = config