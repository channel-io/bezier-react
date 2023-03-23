#!/bin/bash

# See: https://github.com/changesets/action#outputs
# The format is must be [{"name": "@xx/xx", "version": "1.2.0"}, {"name": "@xx/xy", "version": "0.8.9"}]
INPUT=$1

# [
#   {
#     "type": "text",
#     "value": "@xx/xx@1.2.0: <link type=\"url\" value=\"https://github.com/channel-io/bezier-react/releases/tag/@xx/xx@1.2.0\">Release Note</link>"
#   },
#   {
#     "type": "text",
#     "value": "@xx/xy@0.8.9: <link type=\"url\" value=\"https://github.com/channel-io/bezier-react/releases/tag/@xx/xy@0.8.9\">Release Note</link>"
#   }
# ]
echo "$INPUT" | jq --raw-output '[ .[] | (.name + "@" + .version) | {"type": "text", "value": (. + ": <link type=\"url\" value=\"https://github.com/channel-io/bezier-react/releases/tag/" + . + "\">Release Note</link>") } ]'
