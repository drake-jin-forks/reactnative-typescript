const entypoNames = [
    "500px",
    "500px-with-circle",
    "add-to-list",
    "add-user",
    "address",
    "adjust",
    "air",
    "aircraft",
    "aircraft-landing",
    "aircraft-take-off",
    "align-bottom",
    "align-horizontal-middle",
    "align-left",
    "align-right",
    "align-top",
    "align-vertical-middle",
    "app-store",
    "archive",
    "area-graph",
    "arrow-bold-down",
    "arrow-bold-left",
    "arrow-bold-right",
    "arrow-bold-up",
    "arrow-down",
    "arrow-left",
    "arrow-long-down",
    "arrow-long-left",
    "arrow-long-right",
    "arrow-long-up",
    "arrow-right",
    "arrow-up",
    "arrow-with-circle-down",
    "arrow-with-circle-left",
    "arrow-with-circle-right",
    "arrow-with-circle-up",
    "attachment",
    "awareness-ribbon",
    "back",
    "back-in-time",
    "baidu",
    "bar-graph",
    "basecamp",
    "battery",
    "beamed-note",
    "behance",
    "bell",
    "blackboard",
    "block",
    "book",
    "bookmark",
    "bookmarks",
    "bowl",
    "box",
    "briefcase",
    "browser",
    "brush",
    "bucket",
    "bug",
    "cake",
    "calculator",
    "calendar",
    "camera",
    "ccw",
    "chat",
    "check",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-small-down",
    "chevron-small-left",
    "chevron-small-right",
    "chevron-small-up",
    "chevron-thin-down",
    "chevron-thin-left",
    "chevron-thin-right",
    "chevron-thin-up",
    "chevron-up",
    "chevron-with-circle-down",
    "chevron-with-circle-left",
    "chevron-with-circle-right",
    "chevron-with-circle-up",
    "circle",
    "circle-with-cross",
    "circle-with-minus",
    "circle-with-plus",
    "circular-graph",
    "clapperboard",
    "classic-computer",
    "clipboard",
    "clock",
    "cloud",
    "code",
    "cog",
    "colours",
    "compass",
    "controller-fast-backward",
    "controller-fast-forward",
    "controller-jump-to-start",
    "controller-next",
    "controller-paus",
    "controller-play",
    "controller-record",
    "controller-stop",
    "controller-volume",
    "copy",
    "creative-cloud",
    "creative-commons",
    "creative-commons-attribution",
    "creative-commons-noderivs",
    "creative-commons-noncommercial-eu",
    "creative-commons-noncommercial-us",
    "creative-commons-public-domain",
    "creative-commons-remix",
    "creative-commons-share",
    "creative-commons-sharealike",
    "credit",
    "credit-card",
    "crop",
    "cross",
    "cup",
    "cw",
    "cycle",
    "database",
    "dial-pad",
    "direction",
    "document",
    "document-landscape",
    "documents",
    "dot-single",
    "dots-three-horizontal",
    "dots-three-vertical",
    "dots-two-horizontal",
    "dots-two-vertical",
    "download",
    "dribbble",
    "dribbble-with-circle",
    "drink",
    "drive",
    "drop",
    "dropbox",
    "edit",
    "email",
    "emoji-flirt",
    "emoji-happy",
    "emoji-neutral",
    "emoji-sad",
    "erase",
    "eraser",
    "evernote",
    "export",
    "eye",
    "eye-with-line",
    "facebook",
    "facebook-with-circle",
    "feather",
    "fingerprint",
    "flag",
    "flash",
    "flashlight",
    "flat-brush",
    "flattr",
    "flickr",
    "flickr-with-circle",
    "flow-branch",
    "flow-cascade",
    "flow-line",
    "flow-parallel",
    "flow-tree",
    "flower",
    "folder",
    "folder-images",
    "folder-music",
    "folder-video",
    "forward",
    "foursquare",
    "funnel",
    "game-controller",
    "gauge",
    "github",
    "github-with-circle",
    "globe",
    "google-",
    "google--with-circle",
    "google-drive",
    "google-hangouts",
    "google-play",
    "graduation-cap",
    "grid",
    "grooveshark",
    "hair-cross",
    "hand",
    "heart",
    "heart-outlined",
    "help",
    "help-with-circle",
    "home",
    "hour-glass",
    "houzz",
    "icloud",
    "image",
    "image-inverted",
    "images",
    "inbox",
    "infinity",
    "info",
    "info-with-circle",
    "instagram",
    "instagram-with-circle",
    "install",
    "key",
    "keyboard",
    "lab-flask",
    "landline",
    "language",
    "laptop",
    "lastfm",
    "lastfm-with-circle",
    "layers",
    "leaf",
    "level-down",
    "level-up",
    "lifebuoy",
    "light-bulb",
    "light-down",
    "light-up",
    "line-graph",
    "link",
    "linkedin",
    "linkedin-with-circle",
    "list",
    "location",
    "location-pin",
    "lock",
    "lock-open",
    "log-out",
    "login",
    "loop",
    "magnet",
    "magnifying-glass",
    "mail",
    "mail-with-circle",
    "man",
    "map",
    "mask",
    "medal",
    "medium",
    "medium-with-circle",
    "megaphone",
    "menu",
    "merge",
    "message",
    "mic",
    "minus",
    "mixi",
    "mobile",
    "modern-mic",
    "moon",
    "mouse",
    "mouse-pointer",
    "music",
    "network",
    "new",
    "new-message",
    "news",
    "newsletter",
    "note",
    "notification",
    "notifications-off",
    "old-mobile",
    "old-phone",
    "onedrive",
    "open-book",
    "palette",
    "paper-plane",
    "paypal",
    "pencil",
    "phone",
    "picasa",
    "pie-chart",
    "pin",
    "pinterest",
    "pinterest-with-circle",
    "plus",
    "popup",
    "power-plug",
    "price-ribbon",
    "price-tag",
    "print",
    "progress-empty",
    "progress-full",
    "progress-one",
    "progress-two",
    "publish",
    "qq",
    "qq-with-circle",
    "quote",
    "radio",
    "raft",
    "raft-with-circle",
    "rainbow",
    "rdio",
    "rdio-with-circle",
    "remove-user",
    "renren",
    "reply",
    "reply-all",
    "resize-100-",
    "resize-full-screen",
    "retweet",
    "rocket",
    "round-brush",
    "rss",
    "ruler",
    "save",
    "scissors",
    "scribd",
    "select-arrows",
    "share",
    "share-alternative",
    "shareable",
    "shield",
    "shop",
    "shopping-bag",
    "shopping-basket",
    "shopping-cart",
    "shuffle",
    "signal",
    "sina-weibo",
    "skype",
    "skype-with-circle",
    "slideshare",
    "smashing",
    "sound",
    "sound-mix",
    "sound-mute",
    "soundcloud",
    "sports-club",
    "spotify",
    "spotify-with-circle",
    "spreadsheet",
    "squared-cross",
    "squared-minus",
    "squared-plus",
    "star",
    "star-outlined",
    "stopwatch",
    "stumbleupon",
    "stumbleupon-with-circle",
    "suitcase",
    "swap",
    "swarm",
    "sweden",
    "switch",
    "tablet",
    "tablet-mobile-combo",
    "tag",
    "text",
    "text-document",
    "text-document-inverted",
    "thermometer",
    "thumbs-down",
    "thumbs-up",
    "thunder-cloud",
    "ticket",
    "time-slot",
    "tools",
    "traffic-cone",
    "trash",
    "tree",
    "triangle-down",
    "triangle-left",
    "triangle-right",
    "triangle-up",
    "tripadvisor",
    "trophy",
    "tumblr",
    "tumblr-with-circle",
    "tv",
    "twitter",
    "twitter-with-circle",
    "typing",
    "uninstall",
    "unread",
    "untag",
    "upload",
    "upload-to-cloud",
    "user",
    "users",
    "v-card",
    "video",
    "video-camera",
    "vimeo",
    "vimeo-with-circle",
    "vine",
    "vine-with-circle",
    "vinyl",
    "vk",
    "vk-alternitive",
    "vk-with-circle",
    "voicemail",
    "wallet",
    "warning",
    "water",
    "windows-store",
    "xing",
    "xing-with-circle",
    "yelp",
    "youko",
    "youko-with-circle",
    "youtube",
    "youtube-with-circle",
];

export { entypoNames };