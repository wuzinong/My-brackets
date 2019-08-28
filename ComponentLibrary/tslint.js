{
    "defaultSeverity": "warn",
    "rules": {
        "quotemark":[true, "single","avoid-escape"],
        "no-var-keyword":true,
        "variable-name":[true, "ban-keywords", "check-format", "allow-leading-underscore"],
        "ordered-imports":false,
        "object-literal-sort-keys":false,
        "semicolon":[true, "always", "ignore-interfaces"],
        "indent":[true, "spaces", 4],
        "interface-name":false,
        "typedef-whitespace": false,
        "whitespace": false,
        "member-access": [true, "no-public"],
        "one-line": false, 
        "no-console": true, 
        "only-arrow-functions":false,
        "arrow-parens":false,
        "ban-types": [true, ["Object", "Use {} instead."], ["String"]],
        "max-line-length": [true, {"limit": 200, "ignore-pattern": "^import |^export {(.*?)}|class [a-zA-Z]+ implements |//"}],
        "max-classes-per-file":[true, 1], 
        "trailing-comma": [true, { 
            "multiline": {
                "objects": "ignore",
                "arrays": "never",
                "functions": "never",
                "typeLiterals": "ignore"
            },
            "esSpecCompliant": true
        }],
        "no-shadowed-variable": [
            true,
            {
              "class": true,
              "enum": true,
              "function": true,
              "interface": false,
              "namespace": true,
              "typeAlias": false,
              "typeParameter": false
            }
          ]
    },
    "rulesDirectory": []
}
//https://github.com/buzinas/tslint-eslint-rules