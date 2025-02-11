/** @type {import('prettier').Config} */
module.exports = {
    endOfLine: "lf",
    semi: false,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "es5",
    importOrder: [
        "^(react/(.*)$)|^(react$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^@/app/(.*)$",
        "^@/pages/(.*)$",
        "^@/widgets/(.*)$",
        "^@/features/(.*)$",
        "^@/entities/(.*)$",
        "^@/shared/(.*)$",
        "^@/assets/(.*)$",
        "",
        "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],
}
