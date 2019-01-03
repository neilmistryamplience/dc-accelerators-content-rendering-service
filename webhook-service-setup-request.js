{
  "contentAssets": {
    "library": "RefArchSharedLibrary",
    "contentTypes": [
      {
        "contentType": "https://presalesadisws.s3.amazonaws.com/sfcc/dynamic-content/v2.0/dist/contentTypes/sfcc-contentasset.json",
        "mappings": {
          "id": {
            "jsonPath": "$.body['content-asset-id']"
          },
          "online": {
            "default": true
          },
          "searchable": {
            "default": true
          },
          "page_url": {
            "jsonPath": "$.body['page-url']",
            "fallback" : ""
          },
          "page_title": {
            "jsonPath": "$.body.title",
            "fallback" : ""
          }
        },
        "folders": [
          {
            "id": {
              "jsonPath": "$.body['library-folders'][0]"
            },
            "default": true
          },
          {
            "id": {
              "jsonPath": "$.body['library-folders'][1]",
              "fallback" : "blog"
            }
          },
          {
            "id": {
              "jsonPath": "$.body['library-folders'][2]",
              "fallback" : "blog"
            }
          }
        ]
      }
    ]
  }
}