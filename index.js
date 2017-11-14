var fetch = require("node-fetch");
var curl = require("curlrequest");

var track = "0kDu7UDNWGGJ22WgQycmtL";
var bearer =
  "BQA6_MNA1hUahCviP3x9_imOCNkMOP5RfjwkK0aJbatui3b8sBIIkxCMGkioIPwE-H02CvHB5k-JNZRDusf5P-1yF67z8qcTEajZ8f9qxJb-EAdKi_U6w4i--tnWPs3cSTeycSbSWtIF_EOFQQcirBmY8hho_GWTpg";

var options = {
  url: "https://api.spotify.com/v1/audio-features/" + track,
  headers: { accept: "application/json", authorization: "Bearer " + bearer }
};
curl.request(options, function(err, data) {
  console.log(data);
});

// curl -X GET "https://api.spotify.com/v1/audio-features/" -H "Accept: application/json" -H "Authorization: Bearer " + Bearer;

const x = `{ "href" : "https://api.spotify.com/v1/users/roflmaololol/playlists/2YXgUKHtBX5WVxOA4ICpFW/tracks?offset=0&limit=100",
  "items" : [ {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 586785,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600277"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0kDu7UDNWGGJ22WgQycmtL"
      },
      "href" : "https://api.spotify.com/v1/tracks/0kDu7UDNWGGJ22WgQycmtL",
      "id" : "0kDu7UDNWGGJ22WgQycmtL",
      "name" : "Supreme Court and Second Amendment",
      "popularity" : 3,
      "preview_url" : "https://p.scdn.co/mp3-preview/b967d97983bd72bb83ae6184e1deab92c3a6e8c6?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:0kDu7UDNWGGJ22WgQycmtL"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 304250,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600278"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4H9lVsqISfprvrlkZW2a1y"
      },
      "href" : "https://api.spotify.com/v1/tracks/4H9lVsqISfprvrlkZW2a1y",
      "id" : "4H9lVsqISfprvrlkZW2a1y",
      "name" : "Supreme Court and Abortion",
      "popularity" : 2,
      "preview_url" : "https://p.scdn.co/mp3-preview/0bf776b8cf8d327c3d69c8b6e0e4156464c0c235?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:4H9lVsqISfprvrlkZW2a1y"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 506528,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600279"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5BOiTkNoYPEAPTGeeRfMjr"
      },
      "href" : "https://api.spotify.com/v1/tracks/5BOiTkNoYPEAPTGeeRfMjr",
      "id" : "5BOiTkNoYPEAPTGeeRfMjr",
      "name" : "Immigration",
      "popularity" : 10,
      "preview_url" : "https://p.scdn.co/mp3-preview/5dc150ae51363c06703e14fcda467eceba14753f?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:5BOiTkNoYPEAPTGeeRfMjr"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 458722,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600280"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4ECvKD8mnDGAY4Q5Tdddyh"
      },
      "href" : "https://api.spotify.com/v1/tracks/4ECvKD8mnDGAY4Q5Tdddyh",
      "id" : "4ECvKD8mnDGAY4Q5Tdddyh",
      "name" : "Wikileaks, Russia and Nuclear Weapons",
      "popularity" : 2,
      "preview_url" : "https://p.scdn.co/mp3-preview/bb3e0e83e839b1feb401dbf0edffd897caccfe0c?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:4ECvKD8mnDGAY4Q5Tdddyh"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 908059,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600281"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0euRtDittAK7h9ZR829cNH"
      },
      "href" : "https://api.spotify.com/v1/tracks/0euRtDittAK7h9ZR829cNH",
      "id" : "0euRtDittAK7h9ZR829cNH",
      "name" : "The Economy, Taxes and Isis",
      "popularity" : 1,
      "preview_url" : "https://p.scdn.co/mp3-preview/0bbc24a8b3be2e4a2ee8e617caad1da5b8abb837?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:0euRtDittAK7h9ZR829cNH"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 837000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600282"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5avme6yPgYHHcjgaDcn2qA"
      },
      "href" : "https://api.spotify.com/v1/tracks/5avme6yPgYHHcjgaDcn2qA",
      "id" : "5avme6yPgYHHcjgaDcn2qA",
      "name" : "Fitness to Be President",
      "popularity" : 2,
      "preview_url" : "https://p.scdn.co/mp3-preview/8b439337c3c7644cbd8cc28a1088d92d280d594d?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:5avme6yPgYHHcjgaDcn2qA"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 254000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600283"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7MWcUYwrhw66rbVLU6ZvBG"
      },
      "href" : "https://api.spotify.com/v1/tracks/7MWcUYwrhw66rbVLU6ZvBG",
      "id" : "7MWcUYwrhw66rbVLU6ZvBG",
      "name" : "Accepting the Results of the Election and Voter Fraud",
      "popularity" : 1,
      "preview_url" : "https://p.scdn.co/mp3-preview/fee4cefc404ace7007592f55b2c125df0f4e90ff?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:7MWcUYwrhw66rbVLU6ZvBG"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 860000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600284"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0JohM8WCtJFijBKaZnacK9"
      },
      "href" : "https://api.spotify.com/v1/tracks/0JohM8WCtJFijBKaZnacK9",
      "id" : "0JohM8WCtJFijBKaZnacK9",
      "name" : "Foreign Hot Spots",
      "popularity" : 1,
      "preview_url" : "https://p.scdn.co/mp3-preview/e4d42d8f036cbfc82790b59f4e83f98fd57244cc?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:0JohM8WCtJFijBKaZnacK9"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 290622,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600285"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1oDGdZfZMlCaUA1MQCtatO"
      },
      "href" : "https://api.spotify.com/v1/tracks/1oDGdZfZMlCaUA1MQCtatO",
      "id" : "1oDGdZfZMlCaUA1MQCtatO",
      "name" : "National Debt",
      "popularity" : 1,
      "preview_url" : "https://p.scdn.co/mp3-preview/ec0f1d3e34e25e5a51c1801a40f77c56d1f0143d?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:1oDGdZfZMlCaUA1MQCtatO"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 174245,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600286"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6KbxKO287Nb1oUyBjhVo0M"
      },
      "href" : "https://api.spotify.com/v1/tracks/6KbxKO287Nb1oUyBjhVo0M",
      "id" : "6KbxKO287Nb1oUyBjhVo0M",
      "name" : "Entitlements",
      "popularity" : 1,
      "preview_url" : "https://p.scdn.co/mp3-preview/24b75a8f49be13509d30387ee68fdbdc9fb8e88e?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:6KbxKO287Nb1oUyBjhVo0M"
    }
  }, {
    "added_at" : "2017-11-14T17:53:16Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/roflmaololol"
      },
      "href" : "https://api.spotify.com/v1/users/roflmaololol",
      "id" : "roflmaololol",
      "type" : "user",
      "uri" : "spotify:user:roflmaololol"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
          },
          "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
          "id" : "1YElgxZ25jerlMGCQsHaYw",
          "name" : "Donald Trump",
          "type" : "artist",
          "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
          },
          "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
          "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
          "name" : "Hillary Clinton",
          "type" : "artist",
          "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1f5fZlNdG2ZiT8rI4kwUZ5"
        },
        "href" : "https://api.spotify.com/v1/albums/1f5fZlNdG2ZiT8rI4kwUZ5",
        "id" : "1f5fZlNdG2ZiT8rI4kwUZ5",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/dbb55f202a2192871d5c5a5d36d1b98689e87aaa",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/bd8d463d8015d6d214527ea98b1971270ad8a983",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8fc3081a20d30aab11b7394bf667094b348cd4a5",
          "width" : 64
        } ],
        "name" : "Presidential Debate 2016 #3 - University of Nevada at Las Vegas - October 19, 2016",
        "type" : "album",
        "uri" : "spotify:album:1f5fZlNdG2ZiT8rI4kwUZ5"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1YElgxZ25jerlMGCQsHaYw"
        },
        "href" : "https://api.spotify.com/v1/artists/1YElgxZ25jerlMGCQsHaYw",
        "id" : "1YElgxZ25jerlMGCQsHaYw",
        "name" : "Donald Trump",
        "type" : "artist",
        "uri" : "spotify:artist:1YElgxZ25jerlMGCQsHaYw"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yDRBHtW2UrlW7jQZqJ6L5"
        },
        "href" : "https://api.spotify.com/v1/artists/7yDRBHtW2UrlW7jQZqJ6L5",
        "id" : "7yDRBHtW2UrlW7jQZqJ6L5",
        "name" : "Hillary Clinton",
        "type" : "artist",
        "uri" : "spotify:artist:7yDRBHtW2UrlW7jQZqJ6L5"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN" ],
      "disc_number" : 1,
      "duration_ms" : 164264,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US6X81600287"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1v9MoFamcgB0euHmlBCO9j"
      },
      "href" : "https://api.spotify.com/v1/tracks/1v9MoFamcgB0euHmlBCO9j",
      "id" : "1v9MoFamcgB0euHmlBCO9j",
      "name" : "Closing Statements",
      "popularity" : 1,
      "preview_url" : "https://p.scdn.co/mp3-preview/e8eb460ee217f05c881ab591eea93520721f13e8?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:1v9MoFamcgB0euHmlBCO9j"
    }
  } ],
  "limit" : 100,
  "next" : null,
  "offset" : 0,
  "previous" : null,
  "total" : 11
}`;

const y = JSON.parse(x);
const ids = y.items.map(z => {
  return z.track.uri;
});

// console.log("#####", ids);
const sagga = ids.map(bådda => {
  const tommy = bådda.split(":")[2];
  return tommy;
});

// console.log(sagga);
const kung = sagga.reduce((total, morran, currentIndex, arr) => {
  const tobias = ",";
  return total.concat(morran).concat(tobias);
}, "");

// console.log(kung);

// const bjugg = JSON.parse(kung);
// console.log(bjugg);
// const q = bjugg.audio_features.map(x => x.danceability);
// const length = q.length;
// const sum = q.reduce((total, currentValue, currentIndex, arr) => {
//   return total + currentValue;
// }, 0);
// console.log(sum / length);
