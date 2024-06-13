module.exports = {
    semi: false,
    trailingComma: 'none',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,

    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
    //This is to sort import order by: third parts moduels>src>not generated> generated> absolute paths
    importOrder: [
      '<THIRD_PARTY_MODULES>',
      '^src/(.*)$',
      '^(.*)/(?!generated)(.*)/(.*)$',
      '^(.*)/generated/(.*)$',
      '^[./]'
    ]
  }
  