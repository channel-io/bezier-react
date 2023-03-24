#!/bin/bash

# See: https://github.com/changesets/action#outputs
#
# Input:
# [{"name": "@xx/xx", "version": "1.2.0"}, {"name": "@xx/xy", "version": "0.8.9"}]
#
# Output:
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
jq --compact-output '[ .[] | (.name + "@" + .version) | {"type": "text", "value": (. + ": <link type=\"url\" value=\"https://github.com/channel-io/bezier-react/releases/tag/" + . + "\">Release Note</link>") } ]'
