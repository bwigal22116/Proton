
var content = {
    "packs": {
        "5ae86c85-1457-4505-8d2c-d3b712712a21": {
            "settings": {"physics": {"gravity": [0.0, -9.8, 0.0]}, "render": {"fog_end": 800.0, "fog_start": 1.0, "global_ambient": [0.40392157435417175, 0.29411765933036804, 0.14901961386203766, 1.0], "fog_color": [1.0, 0.843137264251709, 0.7372549176216125, 1.0], "fog": "linear", "fog_density": 0.004}},
            "hierarchy": {
                "resource_id": "5ae86c85-1457-4505-8d2c-d3b712712a21",
                "name": "Game",
                "parent": null,
                "children": [{"scale": [1, 1, 1], "name": "Camera", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "5aefa584-fe09-409b-bad7-c2051960922e", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "camera.js", "attributes": [{"displayName": "distance", "name": "distance", "defaultValue": 7, "value": 22, "type": "number", "options": {}}, {"displayName": "lead", "name": "lead", "defaultValue": 7, "value": 10, "type": "number", "options": {}}, {"displayName": "up", "name": "up", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "zoomFactor", "name": "zoomFactor", "defaultValue": 0.4, "value": 0.4, "type": "number", "options": {}}, {"displayName": "zoomHeight", "name": "zoomHeight", "defaultValue": 20, "value": 20, "type": "number", "options": {}}, {"displayName": "minZoom", "name": "minZoom", "defaultValue": -15, "value": 0, "type": "number", "options": {}}, {"displayName": "maxZoom", "name": "maxZoom", "defaultValue": 10, "value": 10, "type": "number", "options": {}}], "name": "camera"}, {"url": "shake.js", "attributes": [], "name": "shake"}]}, "camera": {"fov": 60.0, "projection": 0.0, "clearColor": [0.9137254953384399, 0.6901960968971252, 0.7411764860153198, 1.0], "enabled": true, "orthoHeight": 100.0, "farClip": 500.0, "nearClip": 0.3}, "audiolistener": {"enabled": true}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Directional Light", "parent": "5aefa584-fe09-409b-bad7-c2051960922e", "resource_id": "2b6f495e-5f52-4df8-b33b-5ed726606aed", "labels": [], "enabled": true, "components": {"light": {"color": [1.0, 1.0, 1.0], "shadowResolution": 1024.0, "outerConeAngle": 45.0, "enabled": true, "range": 10.0, "castShadows": false, "intensity": 1.0, "innerConeAngle": 40.0, "type": "directional"}}, "position": [0, 0, 0], "rotation": [45, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Spawnables", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "032553d6-587f-49a3-acc7-e5b3b9b35160", "labels": [], "enabled": true, "components": {}, "position": [0, -831.3790283203125, 680.6376342773438], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "cloud001", "parent": "032553d6-587f-49a3-acc7-e5b3b9b35160", "resource_id": "79ac18fe-c582-4cd1-9b78-a536936ff9e8", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "obstacle.js", "attributes": [{"displayName": "halfExtents", "name": "halfExtents", "defaultValue": [1, 1, 1], "value": [2, 1.5, 2], "type": "vector", "options": {}}, {"displayName": "destroyOnContact", "name": "destroyOnContact", "defaultValue": true, "value": true, "type": "boolean", "options": {}}], "name": "obstacle"}]}}, "position": [-27.32079315185547, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "032553d6-587f-49a3-acc7-e5b3b9b35160", "resource_id": "84e30100-a7b3-4a4b-969a-b719bfc3d742", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 1, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 1.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "gem_C", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [-7.543418884277344, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "032553d6-587f-49a3-acc7-e5b3b9b35160", "resource_id": "773e8ecb-63da-4052-bf6b-14c556b84b65", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 1.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "gem_F", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [-0.9944518804550171, 0.105712890625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "032553d6-587f-49a3-acc7-e5b3b9b35160", "resource_id": "3d4fa137-9181-4f6d-8031-4364c9893705", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 8, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 10, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 1.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [-12.62270736694336, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3.5, 4, 3.5], "name": "spanner", "parent": "032553d6-587f-49a3-acc7-e5b3b9b35160", "resource_id": "c4855586-d6d9-4f99-9e7b-3cad91c228e2", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "da9b7512-a2cf-11e3-8808-22000a4a0339", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 10, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [-17.724750518798828, 0, 0], "rotation": [90, 0, -25], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_D", "parent": "032553d6-587f-49a3-acc7-e5b3b9b35160", "resource_id": "056b7702-3630-4c5a-9f3e-8f6759337249", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [4.305817127227783, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [9, 9, 9], "name": "Model", "parent": "056b7702-3630-4c5a-9f3e-8f6759337249", "resource_id": "6786fb82-6a5d-4490-ab01-b7f8ec8a30d5", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c5216694-93ff-11e3-9e98-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "UI", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "ui.js", "attributes": [], "name": "ui"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "ScreenPause", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "f1978636-e11f-44d9-8caf-3234141cedf5", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "ui_paused.js", "attributes": [], "name": "ui_paused"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "SpriteBackground", "parent": "f1978636-e11f-44d9-8caf-3234141cedf5", "resource_id": "2131b506-9c66-4b39-8a0c-7fee7c5bf1b8", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "31cee4e6-9e10-11e3-81e9-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 2560, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 360, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 4, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpritePlay", "parent": "f1978636-e11f-44d9-8caf-3234141cedf5", "resource_id": "07694bd9-08ea-45fc-b27f-c40029d472ce", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "05a2076e-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 150, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteRestart", "parent": "f1978636-e11f-44d9-8caf-3234141cedf5", "resource_id": "99299adb-2969-4e6e-b25f-ecc7b285ebd6", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "14eba9d2-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteSoundOn", "parent": "f1978636-e11f-44d9-8caf-3234141cedf5", "resource_id": "e6d816fb-d05d-4244-9ca1-81c3614e907c", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "1418b8ec-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": -300, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteSoundOff", "parent": "f1978636-e11f-44d9-8caf-3234141cedf5", "resource_id": "2a6702d4-4c4b-4870-ad99-680d272640be", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "0bb548a0-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": -300, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteMusicOn", "parent": "f1978636-e11f-44d9-8caf-3234141cedf5", "resource_id": "c824f844-5413-4c1d-87b8-e39f09277fd1", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "0bc0f1dc-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 300, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteMusicOff", "parent": "f1978636-e11f-44d9-8caf-3234141cedf5", "resource_id": "27fd6a2b-0518-4ba3-b070-175d4e3532fb", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "0e1b82ee-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 300, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteExit", "parent": "f1978636-e11f-44d9-8caf-3234141cedf5", "resource_id": "f77188fd-cc6c-4d46-b8b1-1c4a9d0c5f53", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "06571276-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": -150, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpritePaused", "parent": "f1978636-e11f-44d9-8caf-3234141cedf5", "resource_id": "d2664363-e594-4c43-b58e-9f3d3cdc3ec8", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "0e2505e4-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": -150, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "ScreenInGame", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "c0dbf398-5eb7-41a6-a9af-ce2ea18cb43b", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "ui_ingame.js", "attributes": [], "name": "ui_ingame"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "SpriteScoreboard", "parent": "c0dbf398-5eb7-41a6-a9af-ce2ea18cb43b", "resource_id": "180c41a1-96fd-4b3b-85d3-692da8e1718b", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "690ef874-a833-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 3, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpritePause", "parent": "c0dbf398-5eb7-41a6-a9af-ce2ea18cb43b", "resource_id": "90a56012-d553-470a-b525-fd4fa72cdba8", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "66ba9dd0-a833-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 0, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 0, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "TextScore", "parent": "c0dbf398-5eb7-41a6-a9af-ce2ea18cb43b", "resource_id": "c12be1a4-a03e-4e2f-8ed6-07a2bea5bf12", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "font_renderer.js", "attributes": [{"displayName": "text", "name": "text", "defaultValue": "", "value": "", "type": "string", "options": {}}, {"displayName": "maxTextLength", "name": "maxTextLength", "defaultValue": 256, "value": 256, "type": "number", "options": {}}, {"displayName": "fontAtlas", "name": "fontAtlas", "defaultValue": [], "value": "cecf38f0-9e14-11e3-81e9-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "fontAtlas", "type": "texture"}}, {"displayName": "fontJson", "name": "fontJson", "defaultValue": [], "value": "cdf6950e-9e14-11e3-81e9-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "fontJson", "type": "json"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "font_renderer"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "ProgressFuel", "parent": "c0dbf398-5eb7-41a6-a9af-ce2ea18cb43b", "resource_id": "d9c715a5-7aee-4cf9-8687-ad01cbb5be07", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "progressbar.js", "attributes": [], "name": "progressbar"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Foreground", "parent": "d9c715a5-7aee-4cf9-8687-ad01cbb5be07", "resource_id": "2304c1ac-33f4-41c2-ade9-b52072a7b3dd", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "332c931e-a834-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Background", "parent": "d9c715a5-7aee-4cf9-8687-ad01cbb5be07", "resource_id": "fd583a50-f8b0-41d1-9e2e-1e5342a8a670", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "332e0352-a834-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "ProgressBonus", "parent": "c0dbf398-5eb7-41a6-a9af-ce2ea18cb43b", "resource_id": "b25fe8fe-a8ca-4b2b-aec8-d11a1795302e", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "progressbar.js", "attributes": [], "name": "progressbar"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Foreground", "parent": "b25fe8fe-a8ca-4b2b-aec8-d11a1795302e", "resource_id": "48a633fc-a888-4102-b421-8301be9109e3", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "91c5833c-a92d-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": -34, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "TextScoreShadow", "parent": "c0dbf398-5eb7-41a6-a9af-ce2ea18cb43b", "resource_id": "7ba3f5f6-e975-427b-9121-2ac2e019d8eb", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "font_renderer.js", "attributes": [{"displayName": "text", "name": "text", "defaultValue": "", "value": "", "type": "string", "options": {}}, {"displayName": "maxTextLength", "name": "maxTextLength", "defaultValue": 256, "value": 256, "type": "number", "options": {}}, {"displayName": "fontAtlas", "name": "fontAtlas", "defaultValue": [], "value": "cecf38f0-9e14-11e3-81e9-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "fontAtlas", "type": "texture"}}, {"displayName": "fontJson", "name": "fontJson", "defaultValue": [], "value": "cdf6950e-9e14-11e3-81e9-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "fontJson", "type": "json"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": -2, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [0.16862745583057404, 0.6078431606292725, 0.8509804010391235, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "font_renderer"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "ScreenInitial", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "38d990d1-d0e8-4f6f-abb6-ae84275fe837", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "ui_initial.js", "attributes": [], "name": "ui_initial"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "SpriteWhite", "parent": "38d990d1-d0e8-4f6f-abb6-ae84275fe837", "resource_id": "5206dd4a-98b1-413c-a72a-e5d64f88c2a8", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "31cee4e6-9e10-11e3-81e9-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 2560, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 250, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteLogoText", "parent": "38d990d1-d0e8-4f6f-abb6-ae84275fe837", "resource_id": "454bd424-75cd-485b-978f-179d4ec609a0", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "c49cd7d4-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 260, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 512, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpritePlay", "parent": "38d990d1-d0e8-4f6f-abb6-ae84275fe837", "resource_id": "d042854c-41a0-4811-97fc-0e1e026445c6", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "05a2076e-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 50, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "SpriteLowFuel", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "a841b119-2ac0-44d8-96c8-e91ff858ee2f", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "652c495a-a833-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 100, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}, {"url": "ui_tweener.js", "attributes": [{"displayName": "from", "name": "from", "defaultValue": [0, 0, 0], "value": [-1280, 0, 0], "type": "vector", "options": {}}, {"displayName": "to", "name": "to", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "duration", "name": "duration", "defaultValue": 0.5, "value": 0.8, "type": "number", "options": {}}, {"displayName": "easing", "name": "easing", "defaultValue": "Linear.None", "value": "Back.InOut", "type": "string", "options": {}}, {"displayName": "reverseAfter", "name": "reverseAfter", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "disableOnEnd", "name": "disableOnEnd", "defaultValue": false, "value": true, "type": "boolean", "options": {}}], "name": "ui_tweener"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteGameover", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "5d128aef-c20a-40b9-9fa2-dab8a4477e02", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "34cf100c-a834-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}, {"url": "ui_tweener.js", "attributes": [{"displayName": "from", "name": "from", "defaultValue": [0, 0, 0], "value": [-1280, 0, 0], "type": "vector", "options": {}}, {"displayName": "to", "name": "to", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "duration", "name": "duration", "defaultValue": 0.5, "value": 0.8, "type": "number", "options": {}}, {"displayName": "easing", "name": "easing", "defaultValue": "Linear.None", "value": "Back.InOut", "type": "string", "options": {}}, {"displayName": "reverseAfter", "name": "reverseAfter", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "disableOnEnd", "name": "disableOnEnd", "defaultValue": false, "value": true, "type": "boolean", "options": {}}], "name": "ui_tweener"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "ScreenGameover", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "ui_gameover.js", "attributes": [], "name": "ui_gameover"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "SpriteBackground", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "cbbe1af2-c9f3-40ab-85c2-42d3d3154589", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "31cee4e6-9e10-11e3-81e9-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 2560, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 360, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 4, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteScoreBg", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "4874a26a-1739-4e58-b2b3-44145f9a4106", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "2d190232-a834-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 3, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteRestart", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "d065249a-669c-4963-8d84-ea101eb8fc8a", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "14eba9d2-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 220, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteExit", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "fbbf290d-7e2f-44d3-a5a3-b231eaa847b4", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "06571276-a832-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": -220, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteGameover", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "fdb98ff6-1491-4b01-bc31-2b64f5e1480c", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "34cd9f74-a834-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": -150, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteHiscore", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "e0f1bf5e-5abf-40b4-85e8-944f230faa39", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "39935ed6-a834-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": -150, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteHiScoreBg", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "5ff03a2c-fe81-4ce9-ba2a-3b2b5cd04756", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "2d628b6e-a834-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 3, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteShare", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "d81d863d-5ae6-49f3-acf6-fd065becdce4", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "66b4b24e-a833-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 20, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 7, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "TextScore", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "77002f9e-a9c0-4bca-a128-e26fec592cf4", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "font_renderer.js", "attributes": [{"displayName": "text", "name": "text", "defaultValue": "", "value": "", "type": "string", "options": {}}, {"displayName": "maxTextLength", "name": "maxTextLength", "defaultValue": 256, "value": 256, "type": "number", "options": {}}, {"displayName": "fontAtlas", "name": "fontAtlas", "defaultValue": [], "value": "1dd5b3be-a83f-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "fontAtlas", "type": "texture"}}, {"displayName": "fontJson", "name": "fontJson", "defaultValue": [], "value": "1d7c7312-a83f-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "fontJson", "type": "json"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 20, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "font_renderer"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "TextScoreShadow", "parent": "9b7a6eaf-e566-423e-962e-2757f158a4eb", "resource_id": "19524e90-22b2-4c5f-ab70-6167781de194", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "font_renderer.js", "attributes": [{"displayName": "text", "name": "text", "defaultValue": "", "value": "", "type": "string", "options": {}}, {"displayName": "maxTextLength", "name": "maxTextLength", "defaultValue": 256, "value": 256, "type": "number", "options": {}}, {"displayName": "fontAtlas", "name": "fontAtlas", "defaultValue": [], "value": "1dd5b3be-a83f-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "fontAtlas", "type": "texture"}}, {"displayName": "fontJson", "name": "fontJson", "defaultValue": [], "value": "1d7c7312-a83f-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "fontJson", "type": "json"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": -2, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 22, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [0.16862745583057404, 0.6078431606292725, 0.8509804010391235, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "font_renderer"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "SpriteStreak2", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "827e742a-2abd-44f0-b2b6-64b5beeedc10", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "3d4c62cc-a927-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": -150, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteStreak3", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "edc821ee-75f1-4247-a246-d4d04bd24bbd", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "3a7e768e-a927-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": -150, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteStreak4", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "2b41983d-d8ff-4d82-911f-f40e7b2718de", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "39a27c2e-a927-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": -150, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteStreak5", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "937fe181-d7e9-4c27-8097-baceec3e2d65", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "4177f938-a927-11e3-80f1-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": -150, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 128, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 1, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SpriteNoFuel", "parent": "fa36ddef-71b4-4bb7-a234-fd80da9aa5e3", "resource_id": "e8eef950-3d19-431f-be47-1320cc4db221", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "sprite.js", "attributes": [{"displayName": "textureAsset", "name": "textureAsset", "defaultValue": [], "value": "021d4158-aa8f-11e3-adf8-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "textureAsset", "type": "texture"}}, {"displayName": "x", "name": "x", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "y", "name": "y", "defaultValue": 0, "value": 50, "type": "number", "options": {}}, {"displayName": "width", "name": "width", "defaultValue": 0, "value": 256, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0, "value": 64, "type": "number", "options": {}}, {"displayName": "depth", "name": "depth", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "uPercentage", "name": "uPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "vPercentage", "name": "vPercentage", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "anchor", "name": "anchor", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "anchor"}}, {"displayName": "pivot", "name": "pivot", "defaultValue": 0, "value": 4, "type": "enumeration", "options": {"enumerations": [{"name": "topLeft", "value": 0}, {"name": "top", "value": 1}, {"name": "topRight", "value": 2}, {"name": "left", "value": 3}, {"name": "center", "value": 4}, {"name": "right", "value": 5}, {"name": "bottomLeft", "value": 6}, {"name": "bottom", "value": 7}, {"name": "bottomRight", "value": 8}], "displayName": "pivot"}}, {"displayName": "tint", "name": "tint", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "maxResHeight", "name": "maxResHeight", "defaultValue": 720, "value": 720, "type": "number", "options": {}}], "name": "sprite"}, {"url": "ui_tweener.js", "attributes": [{"displayName": "from", "name": "from", "defaultValue": [0, 0, 0], "value": [-1280, 0, 0], "type": "vector", "options": {}}, {"displayName": "to", "name": "to", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "duration", "name": "duration", "defaultValue": 0.5, "value": 0.8, "type": "number", "options": {}}, {"displayName": "easing", "name": "easing", "defaultValue": "Linear.None", "value": "Back.InOut", "type": "string", "options": {}}, {"displayName": "reverseAfter", "name": "reverseAfter", "defaultValue": 1, "value": -1, "type": "number", "options": {}}, {"displayName": "disableOnEnd", "name": "disableOnEnd", "defaultValue": false, "value": false, "type": "boolean", "options": {}}], "name": "ui_tweener"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Audio", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "7c9aefdc-5e53-4bc6-aed3-edd02d3abd70", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "audio.js", "attributes": [{"displayName": "simpleGemSound", "name": "simpleGemSound", "defaultValue": "", "value": "note", "type": "string", "options": {}}, {"displayName": "numSimpleGemSounds", "name": "numSimpleGemSounds", "defaultValue": 0, "value": 19, "type": "number", "options": {}}, {"displayName": "megaGemSound", "name": "megaGemSound", "defaultValue": "", "value": "megagem", "type": "string", "options": {}}, {"displayName": "numMegaGemSounds", "name": "numMegaGemSounds", "defaultValue": 0, "value": 6, "type": "number", "options": {}}, {"displayName": "triggerBonusModeSound", "name": "triggerBonusModeSound", "defaultValue": "", "value": "bonus_gem", "type": "string", "options": {}}, {"displayName": "cloudHitSound", "name": "cloudHitSound", "defaultValue": "", "value": "cloud_hit", "type": "string", "options": {}}, {"displayName": "groundHitSound", "name": "groundHitSound", "defaultValue": "", "value": "ground_hit", "type": "string", "options": {}}, {"displayName": "healSound", "name": "healSound", "defaultValue": "", "value": "heal", "type": "string", "options": {}}, {"displayName": "normalMusic", "name": "normalMusic", "defaultValue": "", "value": "music", "type": "string", "options": {}}, {"displayName": "bonusMusic", "name": "bonusMusic", "defaultValue": "", "value": "music_bonus_mode", "type": "string", "options": {}}, {"displayName": "clickSound", "name": "clickSound", "defaultValue": "", "value": "click", "type": "string", "options": {}}, {"displayName": "fuelAlarmSound", "name": "fuelAlarmSound", "defaultValue": "", "value": "fuel_alarm", "type": "string", "options": {}}, {"displayName": "resetNotesTime", "name": "resetNotesTime", "defaultValue": 0.8, "value": 0.8, "type": "number", "options": {}}], "name": "audio"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Music", "parent": "7c9aefdc-5e53-4bc6-aed3-edd02d3abd70", "resource_id": "9a5f1793-facd-40a9-b96b-30f38dae1b46", "labels": [], "enabled": true, "components": {"audiosource": {"activate": true, "assets": ["52227882-a2f9-11e3-81e9-22000a4a0339", "e4260182-a91f-11e3-80f1-22000a4a0339"], "enabled": true, "volume": 0.30000000000000004, "rollOffFactor": 1.0, "minDistance": 1.0, "pitch": 1.0, "maxDistance": 10000.0, "loop": true, "3d": false}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SoundEngine", "parent": "7c9aefdc-5e53-4bc6-aed3-edd02d3abd70", "resource_id": "8b54d79f-ed9d-47dc-b59a-c55f25674ed8", "labels": [], "enabled": true, "components": {"audiosource": {"activate": true, "assets": ["99d29f30-b37b-11e3-b2db-22000a4a0339"], "enabled": true, "volume": 0.5, "rollOffFactor": 1.0, "minDistance": 1.0, "pitch": 1.0, "maxDistance": 10000.0, "loop": true, "3d": false}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SoundSource1", "parent": "7c9aefdc-5e53-4bc6-aed3-edd02d3abd70", "resource_id": "013828dd-5122-44b0-a410-65c8753a1aaa", "labels": [], "enabled": true, "components": {"audiosource": {"activate": false, "assets": ["653bc2d2-a09e-11e3-81e9-22000a4a0339", "6377f286-a09e-11e3-81e9-22000a4a0339", "635ba392-a09e-11e3-81e9-22000a4a0339", "6141dca2-a09e-11e3-81e9-22000a4a0339", "612fc6d4-a09e-11e3-81e9-22000a4a0339", "962637e2-a09e-11e3-81e9-22000a4a0339", "797290b4-a09e-11e3-81e9-22000a4a0339", "653c6b88-a09e-11e3-81e9-22000a4a0339", "7e1410de-a09e-11e3-81e9-22000a4a0339", "7853d9a4-a09e-11e3-81e9-22000a4a0339", "7e7fdcec-a09e-11e3-81e9-22000a4a0339", "948d6d10-a09e-11e3-81e9-22000a4a0339", "7bb7efa4-a09e-11e3-81e9-22000a4a0339", "7bc5dc0e-a09e-11e3-81e9-22000a4a0339", "92dd4c92-a09e-11e3-81e9-22000a4a0339", "92b0b1c8-a09e-11e3-81e9-22000a4a0339", "96268558-a09e-11e3-81e9-22000a4a0339", "9829d418-a09e-11e3-81e9-22000a4a0339", "9d34460a-a09e-11e3-81e9-22000a4a0339", "dbffdfe0-a399-11e3-81e9-22000a4a0339", "da6592b0-a399-11e3-81e9-22000a4a0339", "d9a51008-a399-11e3-81e9-22000a4a0339", "db437dd2-a399-11e3-81e9-22000a4a0339", "d7de77aa-a399-11e3-81e9-22000a4a0339", "d7843704-a399-11e3-81e9-22000a4a0339", "ef83d3da-a3c3-11e3-81e9-22000a4a0339", "ef440c64-a3c3-11e3-81e9-22000a4a0339", "0914f502-a3c6-11e3-81e9-22000a4a0339", "915288ba-a472-11e3-9135-22000a4a0339", "232ca7ac-a879-11e3-80f1-22000a4a0339", "23403eca-a879-11e3-80f1-22000a4a0339"], "enabled": true, "volume": 1.0, "rollOffFactor": 1.0, "minDistance": 1.0, "pitch": 1.0, "maxDistance": 10000.0, "loop": false, "3d": false}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "SoundSource2", "parent": "7c9aefdc-5e53-4bc6-aed3-edd02d3abd70", "resource_id": "a2a7e376-ee80-4987-a9e7-3fa934e092c8", "labels": [], "enabled": true, "components": {"audiosource": {"activate": false, "assets": ["653bc2d2-a09e-11e3-81e9-22000a4a0339", "6377f286-a09e-11e3-81e9-22000a4a0339", "635ba392-a09e-11e3-81e9-22000a4a0339", "6141dca2-a09e-11e3-81e9-22000a4a0339", "612fc6d4-a09e-11e3-81e9-22000a4a0339", "962637e2-a09e-11e3-81e9-22000a4a0339", "797290b4-a09e-11e3-81e9-22000a4a0339", "653c6b88-a09e-11e3-81e9-22000a4a0339", "7e1410de-a09e-11e3-81e9-22000a4a0339", "7853d9a4-a09e-11e3-81e9-22000a4a0339", "7e7fdcec-a09e-11e3-81e9-22000a4a0339", "948d6d10-a09e-11e3-81e9-22000a4a0339", "7bb7efa4-a09e-11e3-81e9-22000a4a0339", "7bc5dc0e-a09e-11e3-81e9-22000a4a0339", "92dd4c92-a09e-11e3-81e9-22000a4a0339", "92b0b1c8-a09e-11e3-81e9-22000a4a0339", "96268558-a09e-11e3-81e9-22000a4a0339", "9829d418-a09e-11e3-81e9-22000a4a0339", "9d34460a-a09e-11e3-81e9-22000a4a0339", "dbffdfe0-a399-11e3-81e9-22000a4a0339", "da6592b0-a399-11e3-81e9-22000a4a0339", "d9a51008-a399-11e3-81e9-22000a4a0339", "db437dd2-a399-11e3-81e9-22000a4a0339", "d7de77aa-a399-11e3-81e9-22000a4a0339", "d7843704-a399-11e3-81e9-22000a4a0339", "ef83d3da-a3c3-11e3-81e9-22000a4a0339", "ef440c64-a3c3-11e3-81e9-22000a4a0339", "0914f502-a3c6-11e3-81e9-22000a4a0339", "915288ba-a472-11e3-9135-22000a4a0339", "232ca7ac-a879-11e3-80f1-22000a4a0339", "23403eca-a879-11e3-80f1-22000a4a0339"], "enabled": true, "volume": 1.0, "rollOffFactor": 1.0, "minDistance": 1.0, "pitch": 1.0, "maxDistance": 10000.0, "loop": false, "3d": false}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Bird", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "57b65834-dfe4-46c5-8782-fb7b45e97cc0", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "player.js", "attributes": [{"displayName": "maxHeight", "name": "maxHeight", "defaultValue": 80, "value": 80, "type": "number", "options": {}}, {"displayName": "minHeight", "name": "minHeight", "defaultValue": -5, "value": -15, "type": "number", "options": {}}, {"displayName": "minSpeed", "name": "minSpeed", "defaultValue": 10, "value": 12, "type": "number", "options": {}}, {"displayName": "maxSpeed", "name": "maxSpeed", "defaultValue": 20, "value": 16, "type": "number", "options": {}}, {"displayName": "fallAcceleration", "name": "fallAcceleration", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "minDecelerationFactor", "name": "minDecelerationFactor", "defaultValue": -0.1, "value": -0.3, "type": "number", "options": {}}, {"displayName": "maxDecelerationFactor", "name": "maxDecelerationFactor", "defaultValue": -0.5, "value": -0.3, "type": "number", "options": {}}, {"displayName": "bonusSpeedModifier", "name": "bonusSpeedModifier", "defaultValue": 2, "value": 4, "type": "number", "options": {}}, {"displayName": "tiltForce", "name": "tiltForce", "defaultValue": 500, "value": 800, "type": "number", "options": {}}, {"displayName": "tiltForceModifierWhenNoFuel", "name": "tiltForceModifierWhenNoFuel", "defaultValue": 0.4, "value": 0.4, "type": "number", "options": {}}, {"displayName": "tiltDamping", "name": "tiltDamping", "defaultValue": 2.5, "value": 4, "type": "number", "options": {}}, {"displayName": "gravity", "name": "gravity", "defaultValue": -200, "value": -350, "type": "number", "options": {}}, {"displayName": "loopModifier", "name": "loopModifier", "defaultValue": 0.5, "value": 1, "type": "number", "options": {}}, {"displayName": "deathVelocity", "name": "deathVelocity", "defaultValue": 30, "value": 20, "type": "number", "options": {}}, {"displayName": "deathGravity", "name": "deathGravity", "defaultValue": -80, "value": -80, "type": "number", "options": {}}, {"displayName": "bodySize", "name": "bodySize", "defaultValue": 6, "value": 6, "type": "number", "options": {}}], "name": "player"}]}}, "position": [-33.043609619140625, 29.491025924682617, 101.4695816040039], "rotation": [0, 0, 0], "children": [{"scale": [0.95, 1, 0.95], "name": "biplane", "parent": "57b65834-dfe4-46c5-8782-fb7b45e97cc0", "resource_id": "ca069f79-8876-48b9-9c08-f957c0910719", "labels": [], "enabled": true, "components": {"model": {"materialAsset": "41f69662-845b-11e3-ad86-22000a219e93", "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "c88a0162-9f15-11e3-b7f1-22000a4a0339", "type": "asset"}, "animation": {"enabled": true, "activate": true, "speed": 5.0, "assets": ["c89293a4-9f15-11e3-b7f1-22000a4a0339"], "loop": true}}, "position": [0, 0, 0], "rotation": [0, 180, 0], "children": [{"scale": [5, 10, 1], "name": "ribbon", "parent": "ca069f79-8876-48b9-9c08-f957c0910719", "resource_id": "971f73b8-8cab-4e0e-85f3-dccbb1b123c2", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "ribbon.js", "attributes": [{"displayName": "lifetime", "name": "lifetime", "defaultValue": 0.5, "value": 0.8, "type": "number", "options": {}}, {"displayName": "xoffset", "name": "xoffset", "defaultValue": -0.8, "value": 0.2, "type": "number", "options": {}}, {"displayName": "yoffset", "name": "yoffset", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "height", "name": "height", "defaultValue": 0.4, "value": 0.65, "type": "number", "options": {}}], "name": "ribbon"}]}}, "position": [0, -0.20604515075683594, -3.3808460235595703], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Smoke", "parent": "ca069f79-8876-48b9-9c08-f957c0910719", "resource_id": "ec823bb3-6218-492f-9797-fb597b3a29e4", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 30, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 2, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0.1, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.5, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, -3], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [0, 0, -1], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 1, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [0.49803921580314636, 0.49803921580314636, 0.49803921580314636, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [0.3019607961177826, 0.3019607961177826, 0.3019607961177826, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0, 0, 0, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0, 0, 0, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "abc8bffe-97c3-11e3-b794-22000a219e93", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "acc83bdc-97c3-11e3-b794-22000a219e93", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [-1.028723955154419, 0, 1.187225341796875], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "pilot", "parent": "ca069f79-8876-48b9-9c08-f957c0910719", "resource_id": "3f4503e5-2a97-47da-847a-8029a57612e6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "0e3bceac-9efd-11e3-ae47-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Fire", "parent": "ca069f79-8876-48b9-9c08-f957c0910719", "resource_id": "19f95856-29eb-43cf-a197-11ab0db51233", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 30, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 2, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 2, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0.1, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.5, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 1.5, -3], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [0.25, 0.25, 0.25], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 1.32, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 1, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 4, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [0.9960784316062927, 0.8196078538894653, 0.21568627655506134, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [0.8156862854957581, 0.3137255012989044, 0.003921568859368563, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0, 0, 0, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0, 0, 0, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0, 0, 0, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "abc8bffe-97c3-11e3-b794-22000a219e93", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "acc83bdc-97c3-11e3-b794-22000a219e93", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [-0.030950546264648438, 0, 1.517242431640625], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "BonusEffect", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "66b1dfdb-a6dd-4ae0-bd22-213bb3da72f8", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "bonus_effect.js", "attributes": [], "name": "bonus_effect"}]}}, "position": [0, -1000, 0], "rotation": [0, 0, 0], "children": [{"scale": [340, 300, 340], "name": "Cylinder", "parent": "66b1dfdb-a6dd-4ae0-bd22-213bb3da72f8", "resource_id": "9766ba2f-628a-426d-9a63-72b90aec8d87", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "0dcc40d4-9992-11e3-86aa-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "scroll_texture.js", "attributes": [{"displayName": "textureProperty", "name": "textureProperty", "defaultValue": "diffuse", "value": "emissive", "type": "string", "options": {}}, {"displayName": "speedU", "name": "speedU", "defaultValue": 0, "value": 0.8, "type": "number", "options": {}}, {"displayName": "speedV", "name": "speedV", "defaultValue": 0, "value": 0, "type": "number", "options": {}}], "name": "scroll_texture"}]}}, "position": [0, -100, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Environment", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "68f88794-4798-4df6-8a75-a038c7db3e0f", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "base", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "e7a86e89-2d13-4731-95bc-5fcae4ea095d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "3065644c-9ae9-11e3-9b4a-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "clouds", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "ba7cfa9c-f611-445b-a886-7800abaec55c", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "8a3d5528-8f78-11e3-a664-22000a219e93", "type": "asset"}}, "position": [0, 56.526084899902344, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "river", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "f104ccce-8c4a-4e22-8b75-158568c8f67c", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "f41d0ecc-9255-11e3-a485-22000a219e93", "type": "asset"}, "animation": {"enabled": true, "activate": true, "speed": 1.0, "assets": [], "loop": true}, "script": {"enabled": true, "scripts": [{"url": "scroll_texture.js", "attributes": [{"displayName": "textureProperty", "name": "textureProperty", "defaultValue": "diffuse", "value": "diffuse|normal", "type": "string", "options": {}}, {"displayName": "speedU", "name": "speedU", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "speedV", "name": "speedV", "defaultValue": 0, "value": 0.1, "type": "number", "options": {}}], "name": "scroll_texture"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.55, 0.55, 0.55], "name": "clouds", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "1daac9f6-bc15-45cb-872f-8733e7355d15", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "8a3d5528-8f78-11e3-a664-22000a219e93", "type": "asset"}}, "position": [0, 58.198692321777344, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "windmill", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "1f03da16-8d3a-4da0-ae4a-27364fce0c73", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "cb201be0-8f2b-11e3-a19d-22000a219e93", "type": "asset"}, "animation": {"enabled": true, "activate": false, "speed": 0.5, "assets": ["cb3553e8-8f2b-11e3-a19d-22000a219e93"], "loop": false}, "script": {"enabled": true, "scripts": [{"url": "animated_object.js", "attributes": [{"displayName": "collectibleName", "name": "collectibleName", "defaultValue": "", "value": "WindmillGem", "type": "string", "options": {}}, {"displayName": "numCollectibles", "name": "numCollectibles", "defaultValue": 0, "value": 4, "type": "number", "options": {}}, {"displayName": "animationName", "name": "animationName", "defaultValue": "", "value": "Windmill", "type": "string", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 20, "value": 20, "type": "number", "options": {}}], "name": "animated_object"}]}}, "position": [0, 0, -0.25], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Hills", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "0947d9f3-6f5d-4c4d-bea9-89d463cd522b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "caac918c-a2fb-11e3-a9b5-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "castle", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "ecb34b00-6f0d-4c68-a012-c1bd6f4dad0e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "fa5dcf1a-94c1-11e3-8d85-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "castle_rocks", "parent": "ecb34b00-6f0d-4c68-a012-c1bd6f4dad0e", "resource_id": "b0f02a73-1779-4baf-aaea-0d5b8f24db81", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "65fdef96-9f1e-11e3-92ed-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "castle_walls", "parent": "ecb34b00-6f0d-4c68-a012-c1bd6f4dad0e", "resource_id": "119766a1-9c26-4578-8025-3f96b85b8e2b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "f7e703e8-9f1e-11e3-9511-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "castle_walls2", "parent": "ecb34b00-6f0d-4c68-a012-c1bd6f4dad0e", "resource_id": "f3a0186d-a9a5-495a-842e-49bf8713669a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "d5444496-9f27-11e3-a7aa-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "towers", "parent": "ecb34b00-6f0d-4c68-a012-c1bd6f4dad0e", "resource_id": "e106f2b0-377c-49df-8578-da74d0895287", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "97b3af8c-9fe9-11e3-b1da-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Collider", "parent": "e106f2b0-377c-49df-8578-da74d0895287", "resource_id": "0c52a9cc-fbe2-4401-982b-b17764d9768d", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "obstacle.js", "attributes": [{"displayName": "halfExtents", "name": "halfExtents", "defaultValue": [1, 1, 1], "value": [2.25, 6.5, 2.25], "type": "vector", "options": {}}, {"displayName": "destroyOnContact", "name": "destroyOnContact", "defaultValue": true, "value": false, "type": "boolean", "options": {}}], "name": "obstacle"}]}}, "position": [-94.11802673339844, 5.26429557800293, 53.53559494018555], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Collider", "parent": "e106f2b0-377c-49df-8578-da74d0895287", "resource_id": "124545b1-4ebe-4c98-8042-764f32332fe9", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "obstacle.js", "attributes": [{"displayName": "halfExtents", "name": "halfExtents", "defaultValue": [1, 1, 1], "value": [2.25, 6.5, 2.25], "type": "vector", "options": {}}, {"displayName": "destroyOnContact", "name": "destroyOnContact", "defaultValue": true, "value": false, "type": "boolean", "options": {}}], "name": "obstacle"}]}}, "position": [-60.68838119506836, 5.26429557800293, 89.36762237548828], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Collider", "parent": "e106f2b0-377c-49df-8578-da74d0895287", "resource_id": "e995e292-a87b-4a98-ae1c-2fd856be0831", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "obstacle.js", "attributes": [{"displayName": "halfExtents", "name": "halfExtents", "defaultValue": [1, 1, 1], "value": [6.5, 2, 1.5], "type": "vector", "options": {}}, {"displayName": "destroyOnContact", "name": "destroyOnContact", "defaultValue": true, "value": false, "type": "boolean", "options": {}}], "name": "obstacle"}]}}, "position": [-89.04625701904297, 1.8844447135925293, 60.34271240234375], "rotation": [0, -57.21726989746094, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Collider", "parent": "e106f2b0-377c-49df-8578-da74d0895287", "resource_id": "c7e46e03-c563-426c-9fbe-8f5715abdae3", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "obstacle.js", "attributes": [{"displayName": "halfExtents", "name": "halfExtents", "defaultValue": [1, 1, 1], "value": [4, 3, 1.5], "type": "vector", "options": {}}, {"displayName": "destroyOnContact", "name": "destroyOnContact", "defaultValue": true, "value": false, "type": "boolean", "options": {}}], "name": "obstacle"}]}}, "position": [-77.4071044921875, 1.8844447135925293, 74.64144897460938], "rotation": [0, -41.575870513916016, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Collider", "parent": "e106f2b0-377c-49df-8578-da74d0895287", "resource_id": "19202988-1af1-4efa-aecb-662303e69c10", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "obstacle.js", "attributes": [{"displayName": "halfExtents", "name": "halfExtents", "defaultValue": [1, 1, 1], "value": [2, 3, 1.5], "type": "vector", "options": {}}, {"displayName": "destroyOnContact", "name": "destroyOnContact", "defaultValue": true, "value": false, "type": "boolean", "options": {}}], "name": "obstacle"}]}}, "position": [-69.50898742675781, 1.5358309745788574, 82.31950378417969], "rotation": [0, -41.575870513916016, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Collider", "parent": "e106f2b0-377c-49df-8578-da74d0895287", "resource_id": "402d9086-a308-4c59-8fc3-b6359119519f", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "obstacle.js", "attributes": [{"displayName": "halfExtents", "name": "halfExtents", "defaultValue": [1, 1, 1], "value": [2, 3, 1.5], "type": "vector", "options": {}}, {"displayName": "destroyOnContact", "name": "destroyOnContact", "defaultValue": true, "value": false, "type": "boolean", "options": {}}], "name": "obstacle"}]}}, "position": [-63.640167236328125, 0.864299476146698, 87.52567291259766], "rotation": [-21.72589683532715, -36.36265182495117, 33.904239654541016], "children": [], "template": null}], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "henge", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "33796efd-fe07-4cd2-a8fa-5727b94ffac4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c90dbf6e-9954-11e3-9042-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "geese", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "3df1f96f-853d-4908-b327-9a4f6f930b58", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "81b2de8c-995f-11e3-8ddf-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "bulrushes", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "79b73d39-2474-43b7-b7cd-44b012bd1a90", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "dbaffa8c-995f-11e3-aae0-22000a219e93", "type": "asset"}}, "position": [-94.15428924560547, 0.758594274520874, 35.64875793457031], "rotation": [0, -2.665006160736084, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "lake", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "0d299c06-3c22-4a97-bd5a-23667fb57c87", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "544fe00e-9958-11e3-93b0-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [300, 270, 300], "name": "sky_cylinder", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "f2529591-980d-4594-b4f1-acbd84ef4e0e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": false, "enabled": true, "castShadows": false, "asset": "4458b826-9311-11e3-9053-22000a219e93", "type": "asset"}}, "position": [0, 41.821815490722656, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "tractor", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "2b674e97-b5f2-4b8e-8928-eda3c1468f6f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "b8f96ecc-9eed-11e3-808c-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "bridge", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "62ee5e8a-29e6-498b-b038-6fd01226714e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "4a8f0a76-9288-11e3-abce-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Collider", "parent": "62ee5e8a-29e6-498b-b038-6fd01226714e", "resource_id": "24225bd7-4c62-4836-b027-dd55a51eb5fe", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "obstacle.js", "attributes": [{"displayName": "halfExtents", "name": "halfExtents", "defaultValue": [1, 1, 1], "value": [4, 0.75, 2.5], "type": "vector", "options": {}}, {"displayName": "destroyOnContact", "name": "destroyOnContact", "defaultValue": true, "value": false, "type": "boolean", "options": {}}], "name": "obstacle"}]}}, "position": [109.05433654785156, 6.025816440582275, 2.1142570972442627], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "bridge_2", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "4f2e954c-0e16-41a1-90e3-649d3c4372fe", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "d711a4fa-9fa7-11e3-be19-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "rocks", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "d8e4c580-267f-4653-86e5-c6afceaf3852", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "4f9a58c0-9fa5-11e3-9d23-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Trees", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "lime_trees", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "2067d410-1245-430f-be1a-44dcef1c888d", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "lime_A", "parent": "2067d410-1245-430f-be1a-44dcef1c888d", "resource_id": "82511c4c-f35e-479d-be85-e3e6fe4c58ad", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "76cac26a-a0bb-11e3-adb5-22000a4a0339", "type": "asset"}}, "position": [93.76925659179688, 0, 9.697051048278809], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.7, 0.8, 0.7], "name": "lime_A", "parent": "2067d410-1245-430f-be1a-44dcef1c888d", "resource_id": "45ce2c5c-4d66-45d0-9199-c14368bc2421", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "76cac26a-a0bb-11e3-adb5-22000a4a0339", "type": "asset"}}, "position": [81.53577423095703, 1.2631280422210693, -32.551902770996094], "rotation": [0, 55.25358963012695, 0], "children": [], "template": null}, {"scale": [0.5, 0.6, 0.5], "name": "lime_A", "parent": "2067d410-1245-430f-be1a-44dcef1c888d", "resource_id": "2566bdb1-f995-4180-8657-c9b6f0957263", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "76cac26a-a0bb-11e3-adb5-22000a4a0339", "type": "asset"}}, "position": [75.25723266601562, 3.339270830154419, -30.771848678588867], "rotation": [180, 10.778768539428711, 180], "children": [], "template": null}, {"scale": [0.5, 0.7, 0.5], "name": "lime_A", "parent": "2067d410-1245-430f-be1a-44dcef1c888d", "resource_id": "68a81f6c-1eee-40b8-a3f0-4cb1c06267b8", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "76cac26a-a0bb-11e3-adb5-22000a4a0339", "type": "asset"}}, "position": [-80.94142150878906, 1.5856974124908447, 31.695453643798828], "rotation": [180, 10.778768539428711, 180], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "lime_B", "parent": "2067d410-1245-430f-be1a-44dcef1c888d", "resource_id": "615f0c73-bf5a-4197-9984-ca238ccf79ce", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "77520b6c-a0bb-11e3-880e-22000a4a0339", "type": "asset"}}, "position": [83.7636489868164, 0.8907948732376099, 7.41455078125], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.65, 0.65, 0.65], "name": "lime_B", "parent": "2067d410-1245-430f-be1a-44dcef1c888d", "resource_id": "20a16fb9-6ee1-4b36-b688-2b2604e33655", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "77520b6c-a0bb-11e3-880e-22000a4a0339", "type": "asset"}}, "position": [-89.20024108886719, 1.589059829711914, 16.52492332458496], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.55, 0.6, 0.55], "name": "lime_B", "parent": "2067d410-1245-430f-be1a-44dcef1c888d", "resource_id": "10a164c4-dee4-4fcf-8167-03a67cc0029d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "77520b6c-a0bb-11e3-880e-22000a4a0339", "type": "asset"}}, "position": [-81.00780487060547, 1.390631914138794, 16.52492332458496], "rotation": [0, 74.6291732788086, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1.1, 1], "name": "poplar_tree", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "10d37a46-ddc0-4946-bbac-da6d9b1dc2b6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "551055b0-a082-11e3-b1fa-22000a4a0339", "type": "asset"}}, "position": [-80.74376678466797, 2.3409171104431152, 23.745500564575195], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 1, 0.9], "name": "poplar_tree", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "00ba3711-1944-4743-8b29-706ef9e8f757", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "551055b0-a082-11e3-b1fa-22000a4a0339", "type": "asset"}}, "position": [-69.19603729248047, 3.109494209289551, 31.751869201660156], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "poplar_tree", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "8d79b94b-3757-4d0f-b7bb-2da2eaebf298", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "551055b0-a082-11e3-b1fa-22000a4a0339", "type": "asset"}}, "position": [-72.1832275390625, 1.8676633834838867, 18.469526290893555], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.75, 0.9], "name": "poplar_tree", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "0802b747-495a-4180-ba81-60ed8132602e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "551055b0-a082-11e3-b1fa-22000a4a0339", "type": "asset"}}, "position": [-55.06023025512695, 4.63037633895874, -2.6964266300201416], "rotation": [0, 89.1949691772461, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "poplar_tree", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "b8787d01-901e-474c-b6f9-8921f4c23cb3", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "551055b0-a082-11e3-b1fa-22000a4a0339", "type": "asset"}}, "position": [-56.01711654663086, 4.133437633514404, -0.8783413171768188], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1.1, 1.1, 1.1], "name": "poplar_tree", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "58f3fc04-203a-43c1-9ea0-4da2d0b9de88", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "551055b0-a082-11e3-b1fa-22000a4a0339", "type": "asset"}}, "position": [-57.88155746459961, 4.63037633895874, -6.092605113983154], "rotation": [0, -71.33856201171875, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "pine bushes", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "676f467d-1f2d-46fe-881e-94f50859c6c4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "a3841db8-9f28-11e3-b187-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "bushes", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "429d8f39-58d4-4fad-8552-dae47f45efad", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "a39e4e42-9954-11e3-b866-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "willow_trees", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "81307c28-7f96-414f-82ad-acc05eb625ba", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "8159992e-9961-11e3-bb17-22000a219e93", "type": "asset"}}, "position": [101.13217163085938, 0.7711116075515747, -28.05445671081543], "rotation": [-5.714359760284424, -18.14295196533203, 5.495814323425293], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "willow_trees", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "1974866d-783d-49ae-9974-84ac31d6f190", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "8159992e-9961-11e3-bb17-22000a219e93", "type": "asset"}}, "position": [93.99412536621094, 0.0602644681930542, 53.38882064819336], "rotation": [19.72827911376953, 77.20353698730469, 31.6607608795166], "children": [{"scale": [1, 1, 1], "name": "Collider", "parent": "1974866d-783d-49ae-9974-84ac31d6f190", "resource_id": "528b9d58-8136-44ae-b84a-f7c0f7edefb1", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "obstacle.js", "attributes": [{"displayName": "halfExtents", "name": "halfExtents", "defaultValue": [1, 1, 1], "value": [2.5, 2.5, 2.5], "type": "vector", "options": {}}, {"displayName": "destroyOnContact", "name": "destroyOnContact", "defaultValue": true, "value": false, "type": "boolean", "options": {}}], "name": "obstacle"}]}}, "position": [-4.586732416100858e-08, 3.8733761310577393, 0.8845082521438599], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [0.8, 0.9, 0.8], "name": "willow_trees", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "10fa1cc2-1478-418c-9252-315195f00171", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "8159992e-9961-11e3-bb17-22000a219e93", "type": "asset"}}, "position": [45.78163528442383, 1.3732919692993164, 66.01495361328125], "rotation": [172.98236083984375, 0.11720848828554153, 178.97671508789062], "children": [], "template": null}, {"scale": [1.1, 1.2, 1.1], "name": "willow_trees", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "e943bc5b-e7f6-46a6-9b9d-c7bc05985aed", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "8159992e-9961-11e3-bb17-22000a219e93", "type": "asset"}}, "position": [56.687374114990234, 0.43486595153808594, 66.6375961303711], "rotation": [-167.41635131835938, -31.172170639038086, 165.947998046875], "children": [], "template": null}, {"scale": [1, 0.8, 1], "name": "bush", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "256424f7-682b-46c4-bb6f-e3875246d825", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6c925b88-aa97-11e3-ae1e-22000a4a0339", "type": "asset"}}, "position": [11.296378135681152, 3.087738513946533, 87.97846984863281], "rotation": [6.255826950073242, 37.79779815673828, 3.843583583831787], "children": [], "template": null}, {"scale": [0.65, 0.65, 0.65], "name": "bush", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "85925a89-dd5c-4864-919e-6642d7d69ca9", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6c925b88-aa97-11e3-ae1e-22000a4a0339", "type": "asset"}}, "position": [12.162412643432617, 2.5666513442993164, 90.26045227050781], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.95, 0.95, 0.95], "name": "bush", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "9dbcf67c-81a6-446f-a05b-ad6097880bcd", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6c925b88-aa97-11e3-ae1e-22000a4a0339", "type": "asset"}}, "position": [31.948970794677734, 1.782451868057251, 85.76786804199219], "rotation": [0.9494568109512329, -48.30680847167969, -9.717303276062012], "children": [], "template": null}, {"scale": [0.75, 0.75, 0.75], "name": "bush", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "2bff0952-2396-4e30-be96-0b77d3222bc8", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6c925b88-aa97-11e3-ae1e-22000a4a0339", "type": "asset"}}, "position": [34.8947639465332, 1.7273820638656616, 83.85289001464844], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.85, 0.85, 0.85], "name": "bush", "parent": "ff0f51fc-5881-44a8-9e0d-2842ca50bd16", "resource_id": "1f48ed53-981f-48b7-ab77-9c1cf4e9f0d9", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6c925b88-aa97-11e3-ae1e-22000a4a0339", "type": "asset"}}, "position": [21.92887306213379, 0.7717496156692505, 104.52979278564453], "rotation": [180, -81.61165618896484, 180], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Mountain", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "3ad1afab-0dc5-47b4-9f69-47c0001bbf7e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "dc7713b4-a2f7-11e3-a432-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Mill", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "1f6a4215-536a-423f-90b3-2011b6872fc2", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "3e0fccd6-a476-11e3-b4e6-22000a4a0339", "type": "asset"}, "animation": {"enabled": true, "activate": false, "speed": 0.5, "assets": ["3e4caa7a-a476-11e3-b4e6-22000a4a0339"], "loop": false}, "script": {"enabled": true, "scripts": [{"url": "animated_object.js", "attributes": [{"displayName": "collectibleName", "name": "collectibleName", "defaultValue": "", "value": "WatermillGem", "type": "string", "options": {}}, {"displayName": "numCollectibles", "name": "numCollectibles", "defaultValue": 0, "value": 3, "type": "number", "options": {}}, {"displayName": "animationName", "name": "animationName", "defaultValue": "", "value": "Mill_wheel", "type": "string", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 20, "value": 20, "type": "number", "options": {}}], "name": "animated_object"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "bulrushes", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "3fa0f406-5725-4c3a-99f8-782a39dedf6f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "dbaffa8c-995f-11e3-aae0-22000a219e93", "type": "asset"}}, "position": [-87.55799102783203, 0.758594274520874, 21.82747459411621], "rotation": [180, 57.361576080322266, 180], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Balloon", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "4465db9b-5d11-4d05-ac37-8576cb2448d3", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "rotate.js", "attributes": [{"displayName": "speed", "name": "speed", "defaultValue": 5, "value": 4, "type": "number", "options": {}}], "name": "rotate"}]}}, "position": [-74.10213470458984, 0, 7.823724746704102], "rotation": [0, 0, 0], "children": [{"scale": [0.5, 0.45, 0.5], "name": "Hot_air_balloon", "parent": "4465db9b-5d11-4d05-ac37-8576cb2448d3", "resource_id": "e34be8b0-6e3f-4939-9172-7dd30265a1ec", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "7566d87c-93dd-11e3-8a04-22000a219e93", "type": "asset"}}, "position": [-19.460220336914062, 25.92880630493164, 0.4769887924194336], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "A_Trees", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "dea13aa9-3455-4ad9-a558-f079fdda08c9", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": null, "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "A_fir_trees_01", "parent": "dea13aa9-3455-4ad9-a558-f079fdda08c9", "resource_id": "2c9f790d-f9f0-4c9c-b400-d028563268b0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "f090ae80-ab5a-11e3-9a52-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "A_fir_trees_02", "parent": "dea13aa9-3455-4ad9-a558-f079fdda08c9", "resource_id": "252a36b7-2052-497c-80ca-23692097f616", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "ef157928-ab5a-11e3-a60f-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "A_fir_trees_03", "parent": "dea13aa9-3455-4ad9-a558-f079fdda08c9", "resource_id": "91ae742d-c842-4c13-8ca4-f60714b939f3", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "f0a32d94-ab5a-11e3-bd52-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "A_fir_bushes", "parent": "dea13aa9-3455-4ad9-a558-f079fdda08c9", "resource_id": "6b234bf8-046a-4dfc-88c7-0836b6208d1b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "ed441c44-ab5a-11e3-a9d2-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "A_pine_trees", "parent": "dea13aa9-3455-4ad9-a558-f079fdda08c9", "resource_id": "52c65779-580b-4e12-bdec-1e0f466a2f8b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "422b82d0-abb3-11e3-a1b7-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "A_cows", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "7e21820b-5216-4edc-8d4d-d17b869b9397", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "561719c0-abaf-11e3-a981-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "A_sheep", "parent": "68f88794-4798-4df6-8a75-a038c7db3e0f", "resource_id": "fcaab242-5981-4c1d-b978-de7eb9e3a63a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "7bfdfe52-abb8-11e3-9951-22000a4a0339", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PreExistingCollectibles", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "1286b2ac-55be-4570-9c0a-f7f90f81dcab", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "Bridge", "parent": "1286b2ac-55be-4570-9c0a-f7f90f81dcab", "resource_id": "822e7390-5048-45af-83db-e4c47074c45c", "labels": [], "enabled": true, "components": {}, "position": [0, 0, -0.5078144073486328], "rotation": [0, 0, 0], "children": [{"scale": [6, 6, 6], "name": "gem_E", "parent": "822e7390-5048-45af-83db-e4c47074c45c", "resource_id": "80bbca71-12bc-4105-8ac9-5d5495aec9f4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [108.69464111328125, 2.289731025695801, 11.544181823730469], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "822e7390-5048-45af-83db-e4c47074c45c", "resource_id": "43fcbd09-3e32-4d37-bbd8-88c3f22c2880", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [108.69464111328125, 2.3705594539642334, 16.65308380126953], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "822e7390-5048-45af-83db-e4c47074c45c", "resource_id": "60d5921b-f5db-47e3-a1f8-f9697d6a0141", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [108.69464111328125, 5.348519325256348, 21.00031280517578], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "822e7390-5048-45af-83db-e4c47074c45c", "resource_id": "a44d32fa-9e6a-4896-a0b1-1b3bed625991", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [108.69464111328125, 5.822017669677734, -5.531828880310059], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3.5, 4, 3.5], "name": "spanner", "parent": "822e7390-5048-45af-83db-e4c47074c45c", "resource_id": "72b3fff1-c55c-4c77-b890-7798fc7cf624", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "da9b7512-a2cf-11e3-8808-22000a4a0339", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 50, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [108.83781433105469, 2.8324952125549316, 5.131148338317871], "rotation": [-4.137858867645264, 64.94266510009766, -93.74959564208984], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Windmill", "parent": "1286b2ac-55be-4570-9c0a-f7f90f81dcab", "resource_id": "e59abb4e-a985-4967-ba05-e86b851dd279", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 32, 0], "children": [{"scale": [6, 6, 6], "name": "WindmillGem", "parent": "e59abb4e-a985-4967-ba05-e86b851dd279", "resource_id": "290df5c1-3ac8-4a79-a3cf-8764bfad68db", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [-54.45621871948242, 6, -93.55853271484375], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "WindmillGem", "parent": "e59abb4e-a985-4967-ba05-e86b851dd279", "resource_id": "424851d1-6876-4ea5-9012-459fa9465007", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [-63.538352966308594, 14, -87.46165466308594], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "WindmillGem", "parent": "e59abb4e-a985-4967-ba05-e86b851dd279", "resource_id": "259d75d2-1bfe-4cba-9ee9-8136f5df3f6d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [-59.076499938964844, 10, -90.63819885253906], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "WindmillGem", "parent": "e59abb4e-a985-4967-ba05-e86b851dd279", "resource_id": "7efadb54-1521-4c7c-95aa-3ff506b41338", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [-59.10952377319336, 18, -90.58047485351562], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Waterfall", "parent": "1286b2ac-55be-4570-9c0a-f7f90f81dcab", "resource_id": "de568e4e-d63d-4f2e-82ed-291ee180ac54", "labels": [], "enabled": true, "components": {}, "position": [0, -18.302520751953125, -7.512205123901367], "rotation": [0, 46.52452087402344, 0], "children": [{"scale": [6, 6, 6], "name": "gem_E", "parent": "de568e4e-d63d-4f2e-82ed-291ee180ac54", "resource_id": "adc1d902-a864-4da0-811e-ef08d982e438", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [106.00413513183594, 15.406759262084961, 18.194408416748047], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "de568e4e-d63d-4f2e-82ed-291ee180ac54", "resource_id": "459c36c6-43ac-48ea-a50b-8b6671b53e2b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [107.6094970703125, 8.90028190612793, 12.43701171875], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "de568e4e-d63d-4f2e-82ed-291ee180ac54", "resource_id": "7f802dce-db84-4e3f-b242-df03cdfa2ff0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [107.6094970703125, 8.659915924072266, -9.145650863647461], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "de568e4e-d63d-4f2e-82ed-291ee180ac54", "resource_id": "33b194ae-148d-4739-b282-9fcd794cebce", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [107.6094970703125, 14.921577453613281, -14.607820510864258], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "de568e4e-d63d-4f2e-82ed-291ee180ac54", "resource_id": "b2a2e890-d5d9-4df0-8e3e-c90209aac51e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [107.6094970703125, 2.041015148162842, 6.461080074310303], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "de568e4e-d63d-4f2e-82ed-291ee180ac54", "resource_id": "567f954b-2979-4a83-9968-24e0e5b44ab8", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [107.6094970703125, 1.877631664276123, -4.4040069580078125], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3.5, 4, 3.5], "name": "spanner", "parent": "de568e4e-d63d-4f2e-82ed-291ee180ac54", "resource_id": "6f6d9173-6942-4f82-aee4-c9e4c161f4f0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "da9b7512-a2cf-11e3-8808-22000a4a0339", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 50, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [108.56745910644531, 0.1255168914794922, 1.0424290895462036], "rotation": [-4.137858867645264, 64.94266510009766, -93.74959564208984], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Watermill", "parent": "1286b2ac-55be-4570-9c0a-f7f90f81dcab", "resource_id": "360299ec-b062-476f-8267-d9700397541d", "labels": [], "enabled": true, "components": {}, "position": [84.0228500366211, 0, 62.57196807861328], "rotation": [0, 0, 0], "children": [{"scale": [6, 6, 6], "name": "WatermillGem", "parent": "360299ec-b062-476f-8267-d9700397541d", "resource_id": "2cd665d3-8c88-4d43-b389-e2818fa9d7f5", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [3.423553466796875, 4.532248020172119, 4.392478942871094], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "WatermillGem", "parent": "360299ec-b062-476f-8267-d9700397541d", "resource_id": "3ed62de1-de59-4f96-85fb-8fad68674380", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [7.088294982910156, 7.732514381408691, 1.040802001953125], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "WatermillGem", "parent": "360299ec-b062-476f-8267-d9700397541d", "resource_id": "03096b7e-0f11-41e0-aab1-f6722584ce99", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [7.088294982910156, 11.664680480957031, 5.527252197265625], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Castle", "parent": "1286b2ac-55be-4570-9c0a-f7f90f81dcab", "resource_id": "fe629a96-dc95-4bb0-ade4-6043d393d6a9", "labels": [], "enabled": true, "components": {}, "position": [-94.2727279663086, 0, 53.65107345581055], "rotation": [0, 0, 0], "children": [{"scale": [6, 6, 6], "name": "gem_E", "parent": "fe629a96-dc95-4bb0-ade4-6043d393d6a9", "resource_id": "4fec8be6-43aa-4a3e-82ad-3e2332c47bec", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [3.891021728515625, 6.7274885177612305, 6.1985321044921875], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "fe629a96-dc95-4bb0-ade4-6043d393d6a9", "resource_id": "4aae78ef-0d17-4523-9457-92f45dfb8d1c", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [11.309059143066406, 4.924631118774414, 15.72872543334961], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [6, 6, 6], "name": "gem_E", "parent": "fe629a96-dc95-4bb0-ade4-6043d393d6a9", "resource_id": "7b617f4b-2009-4f85-982b-b3318ff800df", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2ce913c-93ff-11e3-a569-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 5, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [15.86077880859375, 10, 21.346057891845703], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3.5, 4, 3.5], "name": "spanner", "parent": "fe629a96-dc95-4bb0-ade4-6043d393d6a9", "resource_id": "acfcbef9-5ee0-470d-8bd1-4efbd8975e2b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "da9b7512-a2cf-11e3-8808-22000a4a0339", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 50, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "star_01", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [25.107131958007812, 7.776855945587158, 29.00067138671875], "rotation": [-76.54177856445312, 26.523983001708984, -151.81419372558594], "children": [], "template": null}], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Patterns", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "labels": [], "enabled": true, "components": {}, "position": [590.455322265625, 2107.979736328125, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "PatternSimpleGemLoop", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 2, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [-12.73160171508789, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "cloud001", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "9cc10b1e-7c0c-4511-8aa3-2d61acae9ba0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [18.48185157775879, 11.733084678649902, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "9e8f912f-1b31-4cd7-916f-5f5bf5568e05", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [-0.05996227264404297, 3.1435546875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "2bed2ab4-e25f-4f72-afd4-1ccf14be5689", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [3.7039794921875, 4.5556640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "70fcea88-67ec-44ca-8e36-6cfea4b021ee", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [11.264378547668457, 10.22119140625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "bbcbd7c6-f56e-4610-a967-4b5aadb8a646", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [17.1087646484375, 3.54638671875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "56d2831e-5abd-4d71-9ec0-2b0243c71bdc", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [23.27947998046875, 4.89111328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "8b2b741e-65f4-4c1d-8b01-ccdce737b57c", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [24.843017578125, 15.635498046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "f426e59f-fbcc-4cd4-a2ab-1d188417b060", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [12.7177734375, 16.828125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "d9f0837b-1244-4e7f-8fe7-14ced7393fdc", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [7.68115234375, 6.859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "da000971-fa18-45d8-b4b2-dbde713c8c50", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [11.146885871887207, 5.236083984375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "5315a3b8-d0ec-41d3-a63f-b6b4cbfa8ad6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [25.93289566040039, 9.488037109375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "d7064f0c-0838-43bc-9c85-05db7a1967ac", "resource_id": "b66ce33f-d84e-42b4-8a55-90ec8de5ab3c", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [18.67105484008789, 19.791015625, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternSkilledLoop", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 2, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [74.81855773925781, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "cloud001", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "e8b380fd-77b1-4d8a-b04f-a4c7f695f21f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [9.878907203674316, 5.319487571716309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "3dd04277-eccf-4701-8cd2-a5c45cf9ea61", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [4.233738899230957, -0.1455078125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "524b8f5d-1261-4c5c-b7a8-4973bed6fd6f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "ff177553-be31-48fb-8981-88fe1b9ce3bc", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [8.28643798828125, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "72edc48a-1534-4374-9dc8-6492571a1cde", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [12.473912239074707, -0.1455078125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "70a8ed4a-ae73-4d6a-b3a9-2921b2294bea", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [19.78521728515625, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "8149f8f2-373c-40a8-80c6-81ec92b3794f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [25.19186782836914, 1.78759765625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "eadfec7a-4f26-4e42-9efc-5d31f0f7230b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [28.87664794921875, 5.771484375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "76ee6921-c03d-4489-8abc-2d5e6d468285", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [31.98044204711914, 10.24609375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "df2e753a-4fbd-4007-ae6b-2b5928ba537a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [16.09915542602539, 5.132080078125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "58968013-ab6d-4565-af8b-ad42a24cd15b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [7.112366676330566, 10.012602806091309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.7, 0.7, 0.7], "name": "cloud001", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "6e0d07d9-ced5-4b0f-9d9e-abf493ee88be", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [5.344849586486816, 14.277739524841309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "cloud001", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "77f1ca7f-3d04-4975-b535-57d73788ebc4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [22.09698486328125, 5.319487571716309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "b47417cf-e7f5-4177-a804-e1b66b75dd24", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [24.81439208984375, 10.368315696716309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.7, 0.7, 0.7], "name": "cloud001", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "63c6d950-b8bd-4d68-b9eb-f6277bf5ff3d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [27.78424072265625, 14.585844993591309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "046a8ad2-21ef-45e6-b637-e5ee6a730757", "resource_id": "df24219b-6d94-44f0-a3d6-8cdfa8741f6a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [16.36319351196289, 14.453125, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternLongLoop", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 2, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [31.37136459350586, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "cloud001", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "777184c1-3618-49d6-be35-94cfc5340d3f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [18.48185157775879, 11.733084678649902, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "7b770171-6a6b-4255-8423-9465fe7bd313", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [-0.05996227264404297, 3.1435546875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "8684fb3e-d587-46b3-ae1b-84457f0b6ed5", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [3.7039794921875, 4.5556640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "bd169ed2-6e01-4800-a7e7-1c1ca7561c27", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [3.7039794921875, 4.5556640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "ac6b0365-24be-46ba-8834-1a73f570f8dd", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [12.242222785949707, 9.38623046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "01ea7fe4-0c12-4263-910e-1ada666b770d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [14.87762451171875, 3.54638671875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "2cae22d3-b86a-4ee8-9f23-b953295955f9", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [21.326416015625, 4.89111328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "179f4e71-b640-4a67-9242-9c92206badde", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [24.79864501953125, 14.147216796875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "50a8c1ea-868d-4938-b70d-f574fc024707", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [12.15728759765625, 14.818115234375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "8422d5c5-1263-4a35-ae0f-e860b2f9334d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [7.68115234375, 6.859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "c6caf5da-23e2-4348-a38f-0b14d44c74db", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [11.146885871887207, 5.236083984375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "a3cedbe3-9afb-4a57-9bca-6d7ef4523489", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [24.61172866821289, 18.17236328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "8ef32e9d-0ac4-4dc3-9fac-b29b4783f7d5", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [24.58896255493164, 9.488037109375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "cloud001", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "b397287a-009c-45df-a1a4-f7174686dc41", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [18.48185157775879, 18.53606414794922, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "09ed46f3-1758-4e4d-8b82-2ec2ac728e72", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [23.721923828125, 22.939453125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "1134042e-cf6f-4812-9803-a0533b28b137", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [14.372314453125, 24.145751953125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "ec0542f8-7336-46e2-8464-3637f3666e26", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [13.04910659790039, 19.74365234375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "70ff422d-6a18-470d-bf4c-b56aafbebf6e", "resource_id": "37d63d00-793a-4485-8321-9a86592c9ebc", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [19.05667495727539, 26.185791015625, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternFakeGates", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "641833e5-4943-4cc2-88d6-4e268ccbff22", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 3, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [118.31404113769531, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "8701257c-c9a1-423b-83f3-9dd138b1b708", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [1.6919565200805664, -3.6744089126586914, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "8aba0927-e884-4084-9c8b-fefae98eacf1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [4.233738899230957, 0.855712890625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "dd1138b9-e997-4589-8bfa-8862231a1cd0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "5e81902f-c5ab-4508-a5dd-8f1b50564974", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [9.40179443359375, 6.15283203125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "ff586822-4527-4fca-a455-9957eb1db423", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [13.873631477355957, 10.30126953125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "9bd7dccc-a489-4493-999e-e15be15c558e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [34.45703125, 20.064697265625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "34b56dcb-6fd9-499a-9104-14c92117aecc", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [40.87005615234375, 4.062255859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "c49d6abb-2439-4268-993d-2b50dc4bce7d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [21.55374526977539, 13.2109375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "32e7f45f-ae46-4a6b-8b1a-2a1265c3fef1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [13.940125465393066, 20.734283447265625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.85, 0.85, 0.85], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "6845f543-862f-4a65-a7f9-b80555ce4b1a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [37.68243408203125, 16.361236572265625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "e223c49b-32f1-477e-bb33-3af8ee5f5396", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [1.6919565200805664, 4.764555931091309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "e9174417-ba3e-4a8f-aca3-bbe370d1a2ae", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [13.679200172424316, 4.764555931091309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "eb4a3930-f52d-4577-8859-000b972ad37c", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [13.679200172424316, 15.545073509216309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "c90fe17f-a84a-4ef7-b2f2-9c0efa2679bb", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [27.28116226196289, 15.14306640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "f57170df-43b0-40ec-8b39-547dcc079601", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [26.45294189453125, 6.371826171875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "bcb43b6a-3c12-4bf4-888f-977c2ee6bb53", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [48.81134033203125, 22.6748046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "364ea7ca-f4d6-474e-adf6-a8ea60aa8d01", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [48.56329345703125, -1.2740182876586914, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "f2d06cdc-6fee-4770-8de3-593ab3fd979c", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [33.78598403930664, 4.82763671875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "8f60c304-1aba-4534-aaf2-ec3961e36f59", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [52.79867935180664, 18.423828125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "d9f07499-6ccb-4e7a-8973-c4c3442d70aa", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [58.39251708984375, 13.69970703125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "7020eba0-59dc-4d2a-9d42-3d824462286b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [49.91354751586914, 3.17578125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "1db2d08f-c012-4299-9d2d-3d5ca589a2a0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [67.48516845703125, 2.1611328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.85, 0.85, 0.85], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "b27724e8-f5b5-4319-aecc-40b45fc3ba29", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [36.27923583984375, 9.899078369140625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "e2563fc3-3313-4c58-9b17-2a08a15c670b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [24.39398193359375, 1.3338918685913086, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "4e49318c-b800-4154-8e72-3a3a08f4a232", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [37.65191650390625, -1.2740182876586914, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.85, 0.85, 0.85], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "64c1ee40-4e51-4e0a-858e-cd854aaebf23", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [46.237548828125, 16.361236572265625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.85, 0.85, 0.85], "name": "cloud001", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "03301f69-2e96-4179-859e-f550e1bba2cc", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [46.237548828125, 10.183258056640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "408084f4-1706-474a-aa65-0bc760c0869c", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [57.51971435546875, 3.43359375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "641833e5-4943-4cc2-88d6-4e268ccbff22", "resource_id": "045d65e1-6b24-4be4-9cdd-366659f90e98", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [41.19565200805664, 25.39013671875, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternHighEntry", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 3, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [206.63795471191406, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "d1c3ddd1-509e-4722-95ee-3293515b0cfa", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [39.60467529296875, 18.838775634765625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "39e8a319-b463-4467-b146-515f226a7cd4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [4.233738899230957, 3.10205078125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "6c734262-d828-49f1-80a7-99f1640c898f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "84b289c9-06bd-409c-9b78-8dfa1053ad82", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [8.28643798828125, 7.542236328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "ec2e7400-454c-4ce0-97b5-afbbf1f741d6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [11.350499153137207, 11.859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "47c55b97-9fec-435c-982e-1129c4517154", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [30.83542251586914, 29.67578125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "6e762192-d9fc-409f-ad2a-08d2ffa364e3", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [32.18194580078125, 22.367340087890625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "0b75b5e6-19e4-48c4-9af9-e1325df32e9b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [25.203125, 24.272613525390625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "1e58c919-2edc-4c9a-83a7-3627748c4875", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [52.76260757446289, 20.47998046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1.1, 1.1, 1.1], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "f1164b01-d335-45a3-976c-093eca5912b5", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [53.61737060546875, 13.843657493591309, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.7, 0.7, 0.7], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "d4b94d1b-6bad-4f13-8e23-70480bdbde11", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [46.30694580078125, 16.550201416015625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "0ee1fc64-0fd6-4d96-a55a-a909451684d6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [24.0528564453125, 30.31640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "874da553-72c1-4037-8afd-98a694625f15", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [19.27945327758789, 24.4248046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "ce9f6770-9c90-4964-aac3-73ccbdf5fb73", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [95.32098388671875, 18.330322265625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "cc7fbf19-a880-4e88-b420-c76932237f01", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [37.7337646484375, 27.0546875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "ffc94ea7-c81c-4ada-95af-bd399b4099df", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [66.1353759765625, 26.96337890625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "eea855e5-1db2-4b4b-a262-3fe7984ec048", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [44.32144546508789, 24.13916015625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "eccfcdcc-660f-4a5d-b253-d16764b1fd88", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [59.39133071899414, 23.747314453125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "eac7667c-1b5b-4c8d-8343-789450d5a21b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [72.77938842773438, 29.79345703125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "12565b54-67a0-44d8-8101-5f70dbe6144a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [81.2772216796875, 30.31640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "39d3f824-cb05-4170-9e6e-d0aff1e0b9c1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [88.34915161132812, 24.4248046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "fd2abfc3-d82f-4f95-a600-ce4ed8003837", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [14.96923828125, 18.330322265625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "3b817c58-e243-492d-8901-a72bd423fbab", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [99.9001235961914, 11.859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "012b8a96-1a2d-488d-9687-47bfe95ebc4d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [103.3211669921875, 7.542236328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "1cbec5bb-a5c1-47dd-b819-08eb03d8e116", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [106.5795669555664, 3.10205078125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "2830f5dc-727d-4978-a35b-20445463c942", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [109.73486328125, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.7, 0.7, 0.7], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "07014742-373a-4622-a4da-51007fc215b8", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [60.16839599609375, 17.878082275390625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "9a8454f7-fddd-45dd-a62b-d91eed363348", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [68.43841552734375, 21.305084228515625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "9b61571b-96e5-4dad-96a6-9fb68d6e6b9f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [74.4227294921875, 24.258941650390625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.8, 0.8, 0.8], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "e576b3cc-284e-4732-932e-7d3f44f510a1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [81.22650146484375, 25.791656494140625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "3772c32e-da10-49ba-b1d1-786cde327e68", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [52.29949951171875, 34.693756103515625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "1b245da0-5d09-476e-a192-f99ca3e4dc19", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [55.83837890625, 30.680572509765625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "be21f90f-70c1-41df-9add-2ce8433428ba", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [51.1951904296875, 27.075592041015625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "afb0ce7c-8e81-496b-88af-8b630901f0e0", "resource_id": "9f06ba8f-7a71-4b70-a8e4-9db70a710495", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [52.76260757446289, 39.75634765625, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternEasySine", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 15, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 2.5, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [353.3980712890625, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [2, 2, 2], "name": "gem_C", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "2dabbba1-430e-457f-9fdd-53146a678b78", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [4.233738899230957, 3.10205078125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "03669334-213d-462e-bf36-abdde8412034", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "43878e26-0dd5-41a9-bc26-b92b66cb7548", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [8.28643798828125, 3.146484375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "633c2e88-0ee8-43d1-9e35-2359aa3da3f1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [17.10479736328125, -0.576416015625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "56f8adeb-7d25-4783-87f8-be68c84d3849", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [6.363072395324707, 3.508544921875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "4c0e8c95-6351-415e-940f-428860785def", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [2.090001106262207, 1.494140625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "d58057d9-3f0b-428c-9fd0-e3422b792bf3", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [10.269932746887207, 1.0048828125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "2bbd7636-6615-40a7-83f7-b91ee3fc4e55", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [12.473912239074707, -0.952880859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "d504b043-c02e-49a8-a0b1-02d506e6f5a6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [18.78641128540039, 1.8359375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "5ffa1fbc-10bd-4bcb-ae01-477db2348d77", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [20.60257339477539, 3.791748046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "ae3c20ea-b896-435c-9358-4b1ffb52f8f6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [23.328857421875, 3.284912109375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "991d48ab-6ecd-4240-bb3e-00e7c523840d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [26.13956069946289, 1.656005859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "a1f9177c-705d-45ac-b272-3c42e198a167", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [28.00192642211914, -0.41650390625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "f4387eac-d4b4-4d15-a56f-2a397b93ef04", "resource_id": "ebac290c-3c71-40d2-b138-e83e8e71fb8e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [14.958984375, -1.86474609375, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternTriggerBonus", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "d6343af3-55bd-4d8b-838c-d3032bda7eae", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 30, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1.5, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [392.43060302734375, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "gem_D", "parent": "d6343af3-55bd-4d8b-838c-d3032bda7eae", "resource_id": "1921af98-16a6-4298-b136-3c65d8dbf196", "labels": [], "enabled": true, "components": {}, "position": [13.988316535949707, 0.624755859375, 0], "rotation": [0, 0, 0], "children": [{"scale": [10, 10, 10], "name": "Model", "parent": "1921af98-16a6-4298-b136-3c65d8dbf196", "resource_id": "9b95017b-85bd-4119-8c90-5963fc3d1d08", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c5216694-93ff-11e3-9e98-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternEasyReverseU", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1.5, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [433.003662109375, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [2, 2, 2], "name": "gem_C", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "ecb519d0-7dfe-4759-8143-7668744944c6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [4.233738899230957, 6.4521484375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "373436e8-5377-41f5-9a2a-78f2344bceab", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "133a8358-be86-4696-a1b3-ccfdcdfe51a0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [8.28643798828125, 11.95947265625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "a96b8e41-b74b-4ecd-836d-1d6bca5dad0a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [17.10479736328125, 16.556396484375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "bad6cc44-d849-4fb5-8b57-6040ade1f3e8", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [6.363072395324707, 8.936767578125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "7bebd9b2-70e7-4e30-aea1-89554cde6ffd", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [2.090001106262207, 3.039306640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "01444291-be1f-4c89-84ea-71fbcae7aa38", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [10.269932746887207, 14.990234375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "d04271e5-15be-4a54-81fa-2897ea5e7f04", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [12.473912239074707, 16.66455078125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "8e811672-cb59-4ce1-a41c-4ef4c521b1ed", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [18.78641128540039, 15.093017578125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "c7665148-9a54-4ef3-afcc-21d2f65414fe", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [20.60257339477539, 11.83984375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "32cc7206-8bc7-4f2c-b59b-865e704fdb8a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [23.328857421875, 9.255859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "3c2a10d0-bf6e-4f23-b912-e84cc9508f90", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [25.21097183227539, 6.5859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "91ad7649-c833-4f06-8aa1-7a9ad19f0485", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [27.34128189086914, 3.733642578125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "0dab42f1-52bf-48ef-82c8-6fc66a78df3c", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [14.958984375, 17.583740234375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "76bde7d9-8925-457a-9dec-f3ac694bbac8", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [29.1070556640625, 0.1689453125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "70b6ed23-6e64-4e0e-aef1-5a22ba5c8747", "resource_id": "c4d654ba-1a76-4291-b5d9-fa0e54651b1f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [14.7335205078125, 9.590972900390625, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternEasy3", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 15, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 2, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [480.2310791015625, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [2, 2, 2], "name": "gem_C", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "e63a610d-8506-494e-8d21-d3b7a10da3c6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [0.07565784454345703, 2.686279296875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "cd760f61-96ad-4969-9135-c04a4deb7dbb", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [0, 0.23486328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "5021ecad-2c31-46b3-870e-890e229d312b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [4.02996826171875, 10.078857421875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "4f40c5f8-8d5c-485a-bbd7-83279c5e0f24", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [12.74835205078125, 8.92626953125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "70664a6a-b538-4671-adfa-c9517347c4eb", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [1.843052864074707, 6.584228515625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "d9efcbfb-e2a7-43de-ab3b-85c0e59f65a1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [1.490757942199707, -0.000244140625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "c62eec79-95b9-4982-8436-b5351f6452b6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [6.972081184387207, 12.412841796875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "ff25689a-660c-4cfc-b126-0b991bd3208f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [10.845372200012207, 11.551025390625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "5fdbd9af-dfec-47bf-8ac1-dfd6a5002484", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [13.8101806640625, 6.22412109375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "60e7b1d9-e808-4bf9-8add-ba1d7e58a344", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [6.9794921875, 5.897125244140625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "943c3e5f-e95b-45d0-b1d3-62e421c77db8", "resource_id": "71fb1941-4fc2-42bd-9197-406e202accc8", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [1.308349609375, 2.823486328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternEasyFlyUp", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "3420f280-6e2b-4b49-a649-f8a329ae1142", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 15, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1.5, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [513.6881103515625, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [2, 2, 2], "name": "gem_C", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "9309c001-a80f-4b17-80c4-ebd74effe6b4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [6.180882453918457, 2.693359375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "d51ecb1d-8f9b-44ea-8bc1-58ecea38f8b7", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [0, 0.23486328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "c267ba62-779a-48fd-ae36-4860000692d6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [16.14495849609375, 12.769287109375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "50b99430-45c9-4ab1-acfd-27c504a9d32e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [11.798741340637207, 6.584228515625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "8a48b4c4-ae3f-446d-9b80-b07ded70b6af", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [2.965977668762207, 1.031005859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "377a9784-8327-4ca7-b427-3be6b2c310db", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [17.72757339477539, 15.873291015625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "1746fd7c-2184-40a6-8021-73efa3500d5f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [14.465733528137207, 9.542236328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "78c83c5b-9fb6-4c84-8eae-2d740042f198", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [19.121337890625, 22.785888671875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "0722dc24-a031-4182-b5f4-5f9b55eec26b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [23.9222412109375, 22.860260009765625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "cc24e040-c670-4edd-81c0-6009fc924c15", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [9.081787109375, 4.04248046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "3420f280-6e2b-4b49-a649-f8a329ae1142", "resource_id": "76af9751-9e94-445a-a8a5-43202b97405f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [18.50955581665039, 18.6826171875, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternLoop3", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "d4ab5327-5c50-499f-ad9b-c528dc205805", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 1, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 2, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [-63.86642837524414, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "cloud001", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "a2de48e7-42a6-4597-865a-8299fefc9eda", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [17.47959327697754, 10.957938194274902, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "b501029a-8f28-4842-9223-fb944cfa4201", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [-0.05996227264404297, 3.1435546875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "b0dd9e59-d27b-43e7-abc3-7c408855d4a2", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [3.7039794921875, 4.5556640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "ecf17584-40a6-492c-8768-2519c056d052", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [11.264378547668457, 10.22119140625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "38d6c8e4-3a3d-4f32-ba8a-e7f12f69ab8e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [17.1087646484375, 3.54638671875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "5a0c89c1-138f-4298-9c98-9cd52fc2c34d", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [23.27947998046875, 4.89111328125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "87323cfe-2a2c-4ac5-aa9f-f71cc4fad067", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [24.843017578125, 15.635498046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "ebc7cd9f-52c0-4188-baae-620fdc830029", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [12.7177734375, 16.828125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "f9a260c9-e4d4-495a-84a8-a0015fa2cd8e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [7.68115234375, 6.859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "795dc9da-993f-4986-8b46-2a14b64f71ad", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [11.146885871887207, 5.236083984375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "610f3bb8-9c1d-411e-bcae-b34fc16ce7bb", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [25.93289566040039, 9.488037109375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "39276a2a-6515-4bac-8925-b686346903a6", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [28.24039077758789, 15.2900390625, 7.9705810546875], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "a80f4a5b-0a04-439a-9b48-829cf004b6e7", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [18.59360122680664, 17.255859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "cloud001", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "54911ec0-1fcd-4cd6-a278-d883d03f2095", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [25.61887550354004, 21.74016571044922, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "cloud001", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "24d3aef3-7882-4e70-b397-9c48527ea1b8", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [31.51023292541504, 8.521415710449219, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "009b3492-03bc-4909-9ecb-8d63d48aeb55", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [34.13711929321289, 13.70068359375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "d4ab5327-5c50-499f-ad9b-c528dc205805", "resource_id": "8ac0e803-31f5-4ad5-a6de-41f6b939fb37", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}, "script": {"enabled": true, "scripts": [{"url": "collectible.js", "attributes": [{"displayName": "points", "name": "points", "defaultValue": 10, "value": 2, "type": "number", "options": {}}, {"displayName": "fuel", "name": "fuel", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "radius", "name": "radius", "defaultValue": 2.5, "value": 2.5, "type": "number", "options": {}}, {"displayName": "correctPosition", "name": "correctPosition", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "regenerate", "name": "regenerate", "defaultValue": true, "value": false, "type": "boolean", "options": {}}, {"displayName": "triggerBonusMode", "name": "triggerBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isMegaGem", "name": "isMegaGem", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isHeal", "name": "isHeal", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "isStreak", "name": "isStreak", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "effectName", "name": "effectName", "defaultValue": "", "value": "", "type": "string", "options": {}}], "name": "collectible"}]}}, "position": [37.33355712890625, 9.86083984375, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternTricky", "parent": "72ef5cee-06aa-41d3-a2dc-a0531c650e54", "resource_id": "79f08b11-1047-462b-bcf2-784fb230d247", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "pattern.js", "attributes": [{"displayName": "entry", "name": "entry", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "exit", "name": "exit", "defaultValue": 0, "value": 2, "type": "number", "options": {}}, {"displayName": "weight", "name": "weight", "defaultValue": 1, "value": 100, "type": "number", "options": {"displayName": "weight", "min": 1}}, {"displayName": "difficulty", "name": "difficulty", "defaultValue": 1, "value": 3, "type": "number", "options": {"displayName": "difficulty", "min": 1}}, {"displayName": "spaceAfter", "name": "spaceAfter", "defaultValue": 10, "value": 10, "type": "number", "options": {}}, {"displayName": "isBonusMode", "name": "isBonusMode", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "horizontalScale", "name": "horizontalScale", "defaultValue": 1, "value": 1.5, "type": "number", "options": {}}], "name": "pattern"}]}}, "position": [570.711669921875, -40, 405.0970458984375], "rotation": [0, 0, 0], "children": [{"scale": [2, 2, 2], "name": "gem_C", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "831b4bc4-55e9-48ea-8c9c-7e6018ce1346", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [4.233738899230957, 6.4521484375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "66233a4d-fe94-4d88-8f68-ac4580ba889e", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "7508a396-1767-4237-90ef-d821960c59d1", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [6.70013427734375, 9.640380859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "2cfb01df-f345-4861-a993-a8dfe3b0fe18", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [15.10418701171875, 17.48046875, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "082d9af6-fcf1-4c8f-b149-ba2fde3f3e85", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [12.335118293762207, 15.163330078125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "d8bc3020-286c-4e6b-8432-e12a08066d34", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [2.090001106262207, 3.039306640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "62f0374a-554b-4185-86bc-b3a519d50083", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [9.453526496887207, 12.16552734375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "aaa2e547-0043-4745-bbd8-cb974d6fb754", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [18.22330093383789, 19.798583984375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "00fc7d67-c622-4c40-9c90-239b86fef0f4", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [30.02420425415039, 15.093017578125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "543bdf4f-0585-4021-aa77-f33604345646", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [22.45254898071289, 20.011474609375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "66f4b91c-b920-42c3-b027-6436e25d25ff", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [26.7305908203125, 18.258056640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "d9cc9522-8e72-491e-9a09-0effe3d6c721", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [25.21097183227539, 6.5859375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [2, 2, 2], "name": "gem_C", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "19a870e9-fee5-4029-ab83-a6b9f85247f2", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c3661804-93ff-11e3-86d4-22000a219e93", "type": "asset"}}, "position": [33.09885025024414, 12.42431640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 3], "name": "star_01", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "27336d4d-b1d6-431a-aad8-47ae31051974", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "e1c75aec-94b3-11e3-896b-22000a219e93", "type": "asset"}}, "position": [18.2467041015625, 7.5458984375, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [3, 3, 2], "name": "gem_F", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "861c5979-a08f-4c28-af43-d5f23d8953a0", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c2a283d0-93ff-11e3-b647-22000a219e93", "type": "asset"}}, "position": [35.7271728515625, 9.89453125, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "a26bb5d0-fb8f-4b2f-961d-07cff36a8c6f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [7.3040771484375, 2.006256103515625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "1b21d5a3-81e4-4123-89d2-4eb9fb42786f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [10.7696533203125, 6.905914306640625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "74dbac2d-5fa2-4701-9a77-3e4f53b12c03", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [14.3648681640625, 11.547760009765625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "b88685e8-530c-400d-883a-3a3e1888ce1b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [19.174560546875, 16.049224853515625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "44124899-9125-4540-bf96-8263102a969a", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [20.9539794921875, 2.277252197265625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "19de8b44-2cdf-4b61-b895-faed60d81019", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [24.479248046875, 7.136627197265625, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [0.9, 0.9, 0.9], "name": "cloud001", "parent": "79f08b11-1047-462b-bcf2-784fb230d247", "resource_id": "ada697a2-eab9-430f-b5d6-db4ee869521b", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "6342a48e-932c-11e3-95a5-22000a219e93", "type": "asset"}}, "position": [19.174560546875, 16.049224853515625, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "MinHeights", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "e7ef632e-295b-4712-b8f7-74244cc37401", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "9b61a3e7-cbdb-476c-9e16-e878cf1c56ea", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [113.12500762939453, 0.5519609451293945, -4.506258964538574], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "08dadbce-ba6f-4bae-8225-bffe016ab597", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [95.82968139648438, -58.12835693359375, -48.76197814941406], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "0cb17bf7-1aca-427c-88c7-6a4a5f05efde", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [31.364608764648438, 0.052562713623046875, -102.75775909423828], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "cc715310-70f7-4368-91ad-7400a55f8715", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-31.508167266845703, 1.4584376811981201, -104.01350402832031], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "2159025b-5e5e-42ac-bf85-68dd70fd9348", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-103.67039489746094, 0.7215733528137207, -41.788028717041016], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "d1e83dfa-a38b-48ac-bff0-d2144bf18283", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-108.9154052734375, 1.4317848682403564, 7.047008514404297], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "2be789f9-9329-4530-b44b-1e5f323009bb", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-73.3420639038086, 1.0210752487182617, 80.23556518554688], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "1b175551-c2c6-4bc6-81fd-b0936dfa33c2", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-20.223064422607422, 1.0210752487182617, 105.20352935791016], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "76a68079-6862-44ec-9df8-d879edc1bc57", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [81.85551452636719, 0.2818617820739746, 73.58527374267578], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "ceecee71-9aae-4ea7-b508-e32c0b9869f9", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-50.36225509643555, 0.6268365383148193, -96.0517807006836], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "f130d723-65da-46f0-a425-95a19ad3a040", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-58.09720230102539, 0.6268365383148193, -91.56391143798828], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "e8f688c2-81f5-4286-a3ed-31e014f7b67e", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-62.07396697998047, 0.04150223731994629, -89.87786865234375], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "5c90f7a8-92a4-4863-9583-8c1908c33537", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-74.53289031982422, 1.2233386039733887, -78.29779815673828], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "m", "parent": "e7ef632e-295b-4712-b8f7-74244cc37401", "resource_id": "36bb26e1-3270-46ed-904a-c34c6debe9ab", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "minheight.js", "attributes": [], "name": "minheight"}]}}, "position": [-93.26842498779297, 0.2646360397338867, -59.01438903808594], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "PatternBlocks", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "0bfda10f-778b-441a-8af3-1a514dca8f82", "labels": [], "enabled": true, "components": {}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "BlockWindmill", "parent": "0bfda10f-778b-441a-8af3-1a514dca8f82", "resource_id": "4193c065-eba8-4fd5-8166-7a11cf68a822", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "block_pattern.js", "attributes": [{"displayName": "from", "name": "from", "defaultValue": [0, 0, 0], "value": [-62, 0, -90], "type": "vector", "options": {}}, {"displayName": "to", "name": "to", "defaultValue": [0, 0, 0], "value": [-104, 0, -27], "type": "vector", "options": {}}], "name": "block_pattern"}]}}, "position": [-62.843650817871094, 5.226518154144287, -90.87678527832031], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "BlockTower", "parent": "0bfda10f-778b-441a-8af3-1a514dca8f82", "resource_id": "3011786b-2665-4deb-9e92-123b96cd83a2", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "block_pattern.js", "attributes": [{"displayName": "from", "name": "from", "defaultValue": [0, 0, 0], "value": [-117, 0, 21], "type": "vector", "options": {}}, {"displayName": "to", "name": "to", "defaultValue": [0, 0, 0], "value": [-56, 0, 97], "type": "vector", "options": {}}], "name": "block_pattern"}]}}, "position": [-56.82813262939453, 5.226518154144287, 97.16686248779297], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "SplashScreen", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "ff04e0d6-f2f8-49af-8921-13f2b4b25bfc", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "rotate.js", "attributes": [{"displayName": "speed", "name": "speed", "defaultValue": 5, "value": 2, "type": "number", "options": {}}], "name": "rotate"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [2, 2, 2], "name": "SplashCamera", "parent": "ff04e0d6-f2f8-49af-8921-13f2b4b25bfc", "resource_id": "507ac52b-bd4d-4f34-a932-a4ff5a586e37", "labels": [], "enabled": true, "components": {"camera": {"fov": 49.0, "projection": 0.0, "clearColor": [0.9137254953384399, 0.6901960968971252, 0.7411764860153198, 1.0], "enabled": true, "orthoHeight": 100.0, "farClip": 500.0, "nearClip": 0.3}}, "position": [89.12784576416016, 12.682221984863258, 149.0789031982422], "rotation": [-1.9474732875823975, 30.678539276123047, 0], "children": [{"scale": [1, 1, 1], "name": "SplashPlane", "parent": "507ac52b-bd4d-4f34-a932-a4ff5a586e37", "resource_id": "eb1dfc74-f8a2-4e75-b152-7f884ae13571", "labels": [], "enabled": true, "components": {}, "position": [0.294839084148407, 1.931610107421875, -11.123950004577637], "rotation": [-36.445106506347656, 46.99299621582031, -14.855316162109375], "children": [{"scale": [1, 1, 1], "name": "Model", "parent": "eb1dfc74-f8a2-4e75-b152-7f884ae13571", "resource_id": "aced83d9-747e-4ca7-8695-2289fe175a5f", "labels": [], "enabled": true, "components": {"model": {"materialAsset": null, "receiveShadows": true, "enabled": true, "castShadows": false, "asset": "c88a0162-9f15-11e3-b7f1-22000a4a0339", "type": "asset"}, "animation": {"enabled": true, "activate": true, "speed": 5.0, "assets": ["c89293a4-9f15-11e3-b7f1-22000a4a0339"], "loop": true}, "script": {"enabled": true, "scripts": [{"url": "splash_plane.js", "attributes": [{"displayName": "rollSpeed", "name": "rollSpeed", "defaultValue": 10, "value": 3, "type": "number", "options": {}}, {"displayName": "rollAcceleration", "name": "rollAcceleration", "defaultValue": 7, "value": 3, "type": "number", "options": {}}, {"displayName": "maxRoll", "name": "maxRoll", "defaultValue": 2, "value": 2, "type": "number", "options": {}}, {"displayName": "panAmount", "name": "panAmount", "defaultValue": 0.1, "value": 0.1, "type": "number", "options": {}}], "name": "splash_plane"}]}}, "position": [0, 0, 0], "rotation": [8.999999999999984, -13.899999999999968, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Directional Light", "parent": "507ac52b-bd4d-4f34-a932-a4ff5a586e37", "resource_id": "d3fdd8c2-6037-447f-9f5a-e2f685d00b26", "labels": [], "enabled": true, "components": {"light": {"color": [1.0, 1.0, 1.0], "shadowResolution": 1024.0, "outerConeAngle": 45.0, "enabled": true, "range": 10.0, "castShadows": false, "intensity": 1.0, "innerConeAngle": 40.0, "type": "directional"}}, "position": [0, 0, 0], "rotation": [53.773277282714844, -2.5970135197894706e-07, -2.558293545007473e-06], "children": [], "template": null}], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "Particles", "parent": "5ae86c85-1457-4505-8d2c-d3b712712a21", "resource_id": "219dff20-1616-418c-a537-819ad5d9314b", "labels": [], "enabled": true, "components": {"script": {"enabled": true, "scripts": [{"url": "particles.js", "attributes": [], "name": "particles"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [{"scale": [1, 1, 1], "name": "gem_C", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "e77e31b3-ad89-4b1d-9948-b0b30f84e5c1", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.2, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [0.8117647171020508, 1, 0.8470588326454163, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.46666666865348816, 1, 0.9960784316062927, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.054901961237192154, 0.9647058844566345, 0.95686274766922, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.0784313753247261, 0.9647058844566345, 0.6941176652908325, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_F", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "9d15f29b-ae63-43b9-bb8a-6e364ba98a0d", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.7882353067398071, 1, 0.38823530077934265, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.6117647290229797, 1, 0.6431372761726379, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.3960784375667572, 0.8156862854957581, 0.3529411852359772, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_C", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "50982f6b-1a90-48df-849b-b9e198209338", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.2, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [0.8117647171020508, 1, 0.8470588326454163, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.46666666865348816, 1, 0.9960784316062927, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.054901961237192154, 0.9647058844566345, 0.95686274766922, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.0784313753247261, 0.9647058844566345, 0.6941176652908325, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_C", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "ed113781-301b-4788-8393-7c8c96d6c9e5", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.2, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [0.8117647171020508, 1, 0.8470588326454163, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.46666666865348816, 1, 0.9960784316062927, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.054901961237192154, 0.9647058844566345, 0.95686274766922, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.0784313753247261, 0.9647058844566345, 0.6941176652908325, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_C", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "d9d09e19-e9d2-4aca-9ba8-9708f9a8f01d", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.2, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [0.8117647171020508, 1, 0.8470588326454163, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.46666666865348816, 1, 0.9960784316062927, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.054901961237192154, 0.9647058844566345, 0.95686274766922, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.0784313753247261, 0.9647058844566345, 0.6941176652908325, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "star_01", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "b6bb84d5-3eb4-4afe-af33-c96f0b3524e5", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 30, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 2.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [3, 3, 3], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.49803921580314636, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.9960784316062927, 0.800000011920929, 0.19607843458652496, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.9058823585510254, 0.5803921818733215, 0.10196078568696976, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "star_01", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "f3bf7568-77fd-49b5-9887-f6b358a10afc", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 30, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 2.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [3, 3, 3], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.49803921580314636, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.9960784316062927, 0.800000011920929, 0.19607843458652496, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.9058823585510254, 0.5803921818733215, 0.10196078568696976, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "star_01", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "98b8e3cd-9cec-42c5-9caf-27df8e69a27c", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 30, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 2.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [3, 3, 3], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.49803921580314636, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.9960784316062927, 0.800000011920929, 0.19607843458652496, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.9058823585510254, 0.5803921818733215, 0.10196078568696976, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "star_01", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "4c873a92-c345-4be4-99f0-1108e701cac3", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 30, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 2.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [3, 3, 3], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.49803921580314636, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.9960784316062927, 0.800000011920929, 0.19607843458652496, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.9058823585510254, 0.5803921818733215, 0.10196078568696976, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "star_01", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "4ae7bb06-7ca0-4120-b2a1-b7cc4aff6f8e", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 30, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 2.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [3, 3, 3], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.49803921580314636, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.9960784316062927, 0.800000011920929, 0.19607843458652496, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.9058823585510254, 0.5803921818733215, 0.10196078568696976, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_C", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "0eef23b8-d5e6-4464-bba2-9533eb91d778", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.2, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [0.8117647171020508, 1, 0.8470588326454163, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.46666666865348816, 1, 0.9960784316062927, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.054901961237192154, 0.9647058844566345, 0.95686274766922, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.0784313753247261, 0.9647058844566345, 0.6941176652908325, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_F", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "859d09d0-c24d-4dfd-bf67-cfbd3632a055", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.7882353067398071, 1, 0.38823530077934265, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.6117647290229797, 1, 0.6431372761726379, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.3960784375667572, 0.8156862854957581, 0.3529411852359772, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_F", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "9a54afbd-6e57-4604-bba2-0a04a5ead2db", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.7882353067398071, 1, 0.38823530077934265, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.6117647290229797, 1, 0.6431372761726379, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.3960784375667572, 0.8156862854957581, 0.3529411852359772, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_F", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "818aebdf-1741-4474-a62b-69ffc66ec4d1", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.7882353067398071, 1, 0.38823530077934265, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.6117647290229797, 1, 0.6431372761726379, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.3960784375667572, 0.8156862854957581, 0.3529411852359772, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "gem_F", "parent": "219dff20-1616-418c-a537-819ad5d9314b", "resource_id": "c595c28d-425d-4736-acb9-ac747161c00b", "labels": [], "enabled": false, "components": {"script": {"enabled": true, "scripts": [{"url": "particle_emitter.js", "attributes": [{"displayName": "numParticles", "name": "numParticles", "defaultValue": 1, "value": 20, "type": "number", "options": {}}, {"displayName": "timeRange", "name": "timeRange", "defaultValue": 9999999, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTime", "name": "lifeTime", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "lifeTimeRange", "name": "lifeTimeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "startSize", "name": "startSize", "defaultValue": 1, "value": 0.2, "type": "number", "options": {}}, {"displayName": "startSizeRange", "name": "startSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "endSize", "name": "endSize", "defaultValue": 1, "value": 1.3, "type": "number", "options": {}}, {"displayName": "endSizeRange", "name": "endSizeRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "position", "name": "position", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "positionRange", "name": "positionRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocity", "name": "velocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "velocityRange", "name": "velocityRange", "defaultValue": [0, 0, 0], "value": [2, 2, 2], "type": "vector", "options": {}}, {"displayName": "acceleration", "name": "acceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "accelerationRange", "name": "accelerationRange", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldVelocity", "name": "worldVelocity", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "worldAcceleration", "name": "worldAcceleration", "defaultValue": [0, 0, 0], "value": [0, 0, 0], "type": "vector", "options": {}}, {"displayName": "spinStart", "name": "spinStart", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinStartRange", "name": "spinStartRange", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeed", "name": "spinSpeed", "defaultValue": 0, "value": 0, "type": "number", "options": {}}, {"displayName": "spinSpeedRange", "name": "spinSpeedRange", "defaultValue": 0, "value": 5, "type": "number", "options": {}}, {"displayName": "billboard", "name": "billboard", "defaultValue": true, "value": true, "type": "boolean", "options": {}}, {"displayName": "dynamic", "name": "dynamic", "defaultValue": false, "value": false, "type": "boolean", "options": {}}, {"displayName": "oneOff", "name": "oneOff", "defaultValue": false, "value": true, "type": "boolean", "options": {}}, {"displayName": "colorRamp1", "name": "colorRamp1", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 1, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp2", "name": "colorRamp2", "defaultValue": [1, 1, 1, 1], "value": [1, 1, 0.7529411911964417, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp3", "name": "colorRamp3", "defaultValue": [1, 1, 1, 1], "value": [0.7882353067398071, 1, 0.38823530077934265, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp4", "name": "colorRamp4", "defaultValue": [1, 1, 1, 1], "value": [0.6117647290229797, 1, 0.6431372761726379, 1], "type": "rgba", "options": {}}, {"displayName": "colorRamp5", "name": "colorRamp5", "defaultValue": [1, 1, 1, 1], "value": [0.3960784375667572, 0.8156862854957581, 0.3529411852359772, 1], "type": "rgba", "options": {}}, {"displayName": "colorMap", "name": "colorMap", "defaultValue": [], "value": "1a3387ba-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "colorMap", "type": "texture"}}, {"displayName": "opacityMap", "name": "opacityMap", "defaultValue": [], "value": "18ecf5da-ad24-11e3-89c0-22000a4a0339", "type": "asset", "options": {"max": 1, "displayName": "opacityMap", "type": "texture"}}], "name": "particle_emitter"}]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}],
                "labels": [],
                "position": [0, 0, 0],
                "rotation": [0, 0, 0],
                "scale": [1, 1, 1],
                "enabled": true,
                "components": {"script": {"enabled": true, "scripts": [{"url": "game.js", "attributes": [{"displayName": "bonusModeDuration", "name": "bonusModeDuration", "defaultValue": 20, "value": 10, "type": "number", "options": {}}, {"displayName": "levelRadius", "name": "levelRadius", "defaultValue": 160, "value": 108.5, "type": "number", "options": {}}, {"displayName": "bonusLevelRadius", "name": "bonusLevelRadius", "defaultValue": 175, "value": 180, "type": "number", "options": {}}, {"displayName": "fuelDecreaseRate", "name": "fuelDecreaseRate", "defaultValue": 2, "value": 2, "type": "number", "options": {}}, {"displayName": "fuelDifficultyModifier", "name": "fuelDifficultyModifier", "defaultValue": 1, "value": 0.5, "type": "number", "options": {}}, {"displayName": "fuelLostOnHit", "name": "fuelLostOnHit", "defaultValue": 30, "value": 30, "type": "number", "options": {}}, {"displayName": "maxDifficulty", "name": "maxDifficulty", "defaultValue": 3, "value": 3, "type": "number", "options": {}}, {"displayName": "increaseDifficultyRate", "name": "increaseDifficultyRate", "defaultValue": 60, "value": 60, "type": "number", "options": {}}, {"displayName": "maxStreak", "name": "maxStreak", "defaultValue": 5, "value": 5, "type": "number", "options": {}}, {"displayName": "streakBreakDuration", "name": "streakBreakDuration", "defaultValue": 2, "value": 2, "type": "number", "options": {}}, {"displayName": "numberOfCollectiblesPerStreak", "name": "numberOfCollectiblesPerStreak", "defaultValue": 5, "value": 20, "type": "number", "options": {}}], "name": "game"}, {"url": "tween.js", "attributes": [], "name": ""}, {"url": "physics.js", "attributes": [{"displayName": "numSkipFrames", "name": "numSkipFrames", "defaultValue": 3, "value": 3, "type": "number", "options": {}}], "name": "physics"}, {"url": "input.js", "attributes": [], "name": "input"}, {"url": "patterns.js", "attributes": [{"displayName": "spawnHeight", "name": "spawnHeight", "defaultValue": 15, "value": 17, "type": "number", "options": {}}, {"displayName": "cleanupDot", "name": "cleanupDot", "defaultValue": 0.5, "value": 0.5, "type": "number", "options": {}}, {"displayName": "minMagnetDistance", "name": "minMagnetDistance", "defaultValue": 5, "value": 5, "type": "number", "options": {}}, {"displayName": "magnetSpeed", "name": "magnetSpeed", "defaultValue": 5, "value": 4, "type": "number", "options": {}}, {"displayName": "triggerBonusModePattern", "name": "triggerBonusModePattern", "defaultValue": "", "value": "PatternTriggerBonus", "type": "string", "options": {}}], "name": "patterns"}, {"url": "utils.js", "attributes": [], "name": ""}, {"url": "storage.js", "attributes": [], "name": "storage"}, {"url": "batch_tween_scale.js", "attributes": [{"displayName": "from", "name": "from", "defaultValue": [1, 1, 1], "value": [1, 1, 1], "type": "vector", "options": {}}, {"displayName": "to", "name": "to", "defaultValue": [1, 1, 1], "value": [1.3, 1.1, 1.3], "type": "vector", "options": {}}, {"displayName": "duration", "name": "duration", "defaultValue": 1, "value": 1, "type": "number", "options": {}}, {"displayName": "easing", "name": "easing", "defaultValue": "Quadratic.InOut", "value": "Quadratic.InOut", "type": "string", "options": {}}], "name": "batch_tween_scale"}]}, "pack": {}}
            }
        }
    },
    "application_properties": {
        "resolution_mode": "FIXED",
        "fill_mode": "KEEP_ASPECT",
        "width": 1280,
        "height": 720,
        "engine_version": "stable",
        "libraries": []
    },
    toc: {
    "default": {
        "assets": {
            "021d4158-aa8f-11e3-adf8-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_nofuel"
                },
                "file": {
                    "filename": "sprite_nofuel.png",
                    "hash": "3af728c7c52597dda56561d8b9285649",
                    "size": 9924,
                    "url": "assets/playcanvas/swooop/02/021d4158-aa8f-11e3-adf8-22000a4a0339/sprite_nofuel.png"
                },
                "has_thumbnail": true,
                "name": "sprite_nofuel",
                "resource_id": "021d4158-aa8f-11e3-adf8-22000a4a0339",
                "type": "texture"
            },
            "037b8a3c-9efa-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "Island_base"
                },
                "file": {
                    "filename": "Island_base.jpg",
                    "hash": "070d4225cba26580aadce293d9d6118d",
                    "size": 40424,
                    "url": "assets/playcanvas/swooop/03/037b8a3c-9efa-11e3-81e9-22000a4a0339/Island_base.jpg"
                },
                "has_thumbnail": true,
                "name": "Island_base",
                "resource_id": "037b8a3c-9efa-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "04f50446-a0bd-11e3-bc01-22000a4a0339": {
                "data": {
                    "name": "cows",
                    "parameters": [
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "70ff183e-a0a9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 25,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "cows",
                "resource_id": "04f50446-a0bd-11e3-bc01-22000a4a0339",
                "type": "material"
            },
            "05647dbc-9f0f-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "windmill",
                    "parameters": [
                        {
                            "data": [
                                0.054901961237192154,
                                0.054901961237192154,
                                0.054901961237192154
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.054901961237192154,
                                0.054901961237192154,
                                0.054901961237192154
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "cdea7dce-9ef9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "windmill",
                "resource_id": "05647dbc-9f0f-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "05a2076e-a832-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_play"
                },
                "file": {
                    "filename": "sprite_play.png",
                    "hash": "4cf84f147de26188c514f74782296bd5",
                    "size": 4901,
                    "url": "assets/playcanvas/swooop/05/05a2076e-a832-11e3-80f1-22000a4a0339/sprite_play.png"
                },
                "has_thumbnail": true,
                "name": "sprite_play",
                "resource_id": "05a2076e-a832-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "062db338-a15f-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "Env_map"
                },
                "file": {
                    "filename": "Env_map.jpg",
                    "hash": "4ac0552b389cf335e3c947871d7dcc33",
                    "size": 47985,
                    "url": "assets/playcanvas/swooop/06/062db338-a15f-11e3-81e9-22000a4a0339/Env_map.jpg"
                },
                "has_thumbnail": true,
                "name": "Env_map",
                "resource_id": "062db338-a15f-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "06571276-a832-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_quit"
                },
                "file": {
                    "filename": "sprite_quit.png",
                    "hash": "269ac5037b663ca2a123f07e1299f9c7",
                    "size": 3031,
                    "url": "assets/playcanvas/swooop/06/06571276-a832-11e3-80f1-22000a4a0339/sprite_quit.png"
                },
                "has_thumbnail": true,
                "name": "sprite_quit",
                "resource_id": "06571276-a832-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "0914f502-a3c6-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "heal.mp3",
                    "hash": "97cec268caa6c3001e1948e0c059409d",
                    "size": 12537,
                    "url": "assets/playcanvas/swooop/09/0914f502-a3c6-11e3-81e9-22000a4a0339/heal.mp3"
                },
                "has_thumbnail": false,
                "name": "heal",
                "resource_id": "0914f502-a3c6-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "0bb548a0-a832-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_sound_off"
                },
                "file": {
                    "filename": "sprite_sound_off.png",
                    "hash": "f37d70642bdd98879b6712c55fd21176",
                    "size": 1747,
                    "url": "assets/playcanvas/swooop/0b/0bb548a0-a832-11e3-80f1-22000a4a0339/sprite_sound_off.png"
                },
                "has_thumbnail": true,
                "name": "sprite_sound_off",
                "resource_id": "0bb548a0-a832-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "0bc0f1dc-a832-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_music_on"
                },
                "file": {
                    "filename": "sprite_music_on.png",
                    "hash": "d1a6dbe64207a0c0796659b4165df675",
                    "size": 1247,
                    "url": "assets/playcanvas/swooop/0b/0bc0f1dc-a832-11e3-80f1-22000a4a0339/sprite_music_on.png"
                },
                "has_thumbnail": true,
                "name": "sprite_music_on",
                "resource_id": "0bc0f1dc-a832-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "0dcc40d4-9992-11e3-86aa-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "6e13f6c6-8cd6-11e3-8222-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "Bonus_cylinder.json",
                    "hash": "d3d508342c44a23ffd9d40dac68610cf",
                    "size": 8178,
                    "url": "assets/playcanvas/swooop/0d/0dcc40d4-9992-11e3-86aa-22000a219e93/Bonus_cylinder.json"
                },
                "has_thumbnail": false,
                "name": "Bonus_cylinder",
                "resource_id": "0dcc40d4-9992-11e3-86aa-22000a219e93",
                "type": "model"
            },
            "0e1b82ee-a832-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_music_off"
                },
                "file": {
                    "filename": "sprite_music_off.png",
                    "hash": "be1b70ca4ce461bc67fa4deacaa1f78c",
                    "size": 1723,
                    "url": "assets/playcanvas/swooop/0e/0e1b82ee-a832-11e3-80f1-22000a4a0339/sprite_music_off.png"
                },
                "has_thumbnail": true,
                "name": "sprite_music_off",
                "resource_id": "0e1b82ee-a832-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "0e2505e4-a832-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_paused"
                },
                "file": {
                    "filename": "sprite_paused.png",
                    "hash": "e3f086516b2b28e91f62996f2d08eadd",
                    "size": 2616,
                    "url": "assets/playcanvas/swooop/0e/0e2505e4-a832-11e3-80f1-22000a4a0339/sprite_paused.png"
                },
                "has_thumbnail": true,
                "name": "sprite_paused",
                "resource_id": "0e2505e4-a832-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "0e3bceac-9efd-11e3-ae47-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "35675884-9ee9-11e3-886a-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "pilot.json",
                    "hash": "ee0f3056e76430843b373ee5d4029769",
                    "size": 256621,
                    "url": "assets/playcanvas/swooop/0e/0e3bceac-9efd-11e3-ae47-22000a4a0339/pilot.json"
                },
                "has_thumbnail": false,
                "name": "pilot",
                "resource_id": "0e3bceac-9efd-11e3-ae47-22000a4a0339",
                "type": "model"
            },
            "1418b8ec-a832-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_sound_on"
                },
                "file": {
                    "filename": "sprite_sound_on.png",
                    "hash": "b48743e880c765f7dd8325d1b13fce7f",
                    "size": 1274,
                    "url": "assets/playcanvas/swooop/14/1418b8ec-a832-11e3-80f1-22000a4a0339/sprite_sound_on.png"
                },
                "has_thumbnail": true,
                "name": "sprite_sound_on",
                "resource_id": "1418b8ec-a832-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "14eba9d2-a832-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_restart"
                },
                "file": {
                    "filename": "sprite_restart.png",
                    "hash": "33bed1c5b8e2475dbfa6ab2880f875cc",
                    "size": 5738,
                    "url": "assets/playcanvas/swooop/14/14eba9d2-a832-11e3-80f1-22000a4a0339/sprite_restart.png"
                },
                "has_thumbnail": true,
                "name": "sprite_restart",
                "resource_id": "14eba9d2-a832-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "18ecf5da-ad24-11e3-89c0-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "spark_alpha"
                },
                "file": {
                    "filename": "spark_alpha.png",
                    "hash": "e555b27cbd2df591097f495fcdead106",
                    "size": 7379,
                    "url": "assets/playcanvas/swooop/18/18ecf5da-ad24-11e3-89c0-22000a4a0339/spark_alpha.png"
                },
                "has_thumbnail": true,
                "name": "spark_alpha",
                "resource_id": "18ecf5da-ad24-11e3-89c0-22000a4a0339",
                "type": "texture"
            },
            "1a3387ba-ad24-11e3-89c0-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "spark"
                },
                "file": {
                    "filename": "spark.png",
                    "hash": "927be4c860f3d38f114b219fe375c53c",
                    "size": 7379,
                    "url": "assets/playcanvas/swooop/1a/1a3387ba-ad24-11e3-89c0-22000a4a0339/spark.png"
                },
                "has_thumbnail": true,
                "name": "spark",
                "resource_id": "1a3387ba-ad24-11e3-89c0-22000a4a0339",
                "type": "texture"
            },
            "1d7c7312-a83f-11e3-80f1-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "proxima_blackit_64.json",
                    "hash": "6ff193220000ba767ce34d1462659d3b",
                    "size": 1961,
                    "url": "assets/playcanvas/swooop/1d/1d7c7312-a83f-11e3-80f1-22000a4a0339/proxima_blackit_64.json"
                },
                "has_thumbnail": false,
                "name": "proxima_blackit_64",
                "resource_id": "1d7c7312-a83f-11e3-80f1-22000a4a0339",
                "type": "json"
            },
            "1dd5b3be-a83f-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "proxima_blackit_64"
                },
                "file": {
                    "filename": "proxima_blackit_64.png",
                    "hash": "9db800795ceb55efe578f6eac5c3f113",
                    "size": 6681,
                    "url": "assets/playcanvas/swooop/1d/1dd5b3be-a83f-11e3-80f1-22000a4a0339/proxima_blackit_64.png"
                },
                "has_thumbnail": true,
                "name": "proxima_blackit_64",
                "resource_id": "1dd5b3be-a83f-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "232ca7ac-a879-11e3-80f1-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "click.mp3",
                    "hash": "8b0cbb050da2c7b46ad1d118c4aac4ae",
                    "size": 1670,
                    "url": "assets/playcanvas/swooop/23/232ca7ac-a879-11e3-80f1-22000a4a0339/click.mp3"
                },
                "has_thumbnail": false,
                "name": "click",
                "resource_id": "232ca7ac-a879-11e3-80f1-22000a4a0339",
                "type": "audio"
            },
            "23403eca-a879-11e3-80f1-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "fuel_alarm.mp3",
                    "hash": "15f4c02542e10777a238b01401d3acb7",
                    "size": 27166,
                    "url": "assets/playcanvas/swooop/23/23403eca-a879-11e3-80f1-22000a4a0339/fuel_alarm.mp3"
                },
                "has_thumbnail": false,
                "name": "fuel_alarm",
                "resource_id": "23403eca-a879-11e3-80f1-22000a4a0339",
                "type": "audio"
            },
            "267f8fd6-a096-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "fir_trees"
                },
                "file": {
                    "filename": "fir_trees.jpg",
                    "hash": "f5e27660708c70471b12f1ad93bad132",
                    "size": 17053,
                    "url": "assets/playcanvas/swooop/26/267f8fd6-a096-11e3-81e9-22000a4a0339/fir_trees.jpg"
                },
                "has_thumbnail": true,
                "name": "fir_trees",
                "resource_id": "267f8fd6-a096-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "2d190232-a834-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_final_score_bg"
                },
                "file": {
                    "filename": "sprite_final_score_bg.png",
                    "hash": "505d708cc25b0c5f9d2a0f1e65c3df2d",
                    "size": 3427,
                    "url": "assets/playcanvas/swooop/2d/2d190232-a834-11e3-80f1-22000a4a0339/sprite_final_score_bg.png"
                },
                "has_thumbnail": true,
                "name": "sprite_final_score_bg",
                "resource_id": "2d190232-a834-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "2d628b6e-a834-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_highscore_bg"
                },
                "file": {
                    "filename": "sprite_highscore_bg.png",
                    "hash": "d7a20493387dfdb3aafa8308053425fd",
                    "size": 6460,
                    "url": "assets/playcanvas/swooop/2d/2d628b6e-a834-11e3-80f1-22000a4a0339/sprite_highscore_bg.png"
                },
                "has_thumbnail": true,
                "name": "sprite_highscore_bg",
                "resource_id": "2d628b6e-a834-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "3065644c-9ae9-11e3-9b4a-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "311283e8-9ae9-11e3-856d-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "Island_C.json",
                    "hash": "571e9dfde4b807590643fbf63a04e1d7",
                    "size": 472554,
                    "url": "assets/playcanvas/swooop/30/3065644c-9ae9-11e3-9b4a-22000a219e93/Island_C.json"
                },
                "has_thumbnail": false,
                "name": "Island_C",
                "resource_id": "3065644c-9ae9-11e3-9b4a-22000a219e93",
                "type": "model"
            },
            "311283e8-9ae9-11e3-856d-22000a219e93": {
                "data": {
                    "name": "island base",
                    "parameters": [
                        {
                            "data": [
                                0.21176470816135406,
                                0.239215686917305,
                                0.2823529541492462
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.21176470816135406,
                                0.239215686917305,
                                0.2823529541492462
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "037b8a3c-9efa-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1.07,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "island base",
                "resource_id": "311283e8-9ae9-11e3-856d-22000a219e93",
                "type": "material"
            },
            "31cee4e6-9e10-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "white"
                },
                "file": {
                    "filename": "white.jpg",
                    "hash": "c2ccae42a8acded7b67efa4d84be5f88",
                    "size": 190,
                    "url": "assets/playcanvas/swooop/31/31cee4e6-9e10-11e3-81e9-22000a4a0339/white.jpg"
                },
                "has_thumbnail": true,
                "name": "white",
                "resource_id": "31cee4e6-9e10-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "332c931e-a834-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_fuel_fg"
                },
                "file": {
                    "filename": "sprite_fuel_fg.png",
                    "hash": "7075a54b250c9048cebe3f347a1f9679",
                    "size": 1382,
                    "url": "assets/playcanvas/swooop/33/332c931e-a834-11e3-80f1-22000a4a0339/sprite_fuel_fg.png"
                },
                "has_thumbnail": true,
                "name": "sprite_fuel_fg",
                "resource_id": "332c931e-a834-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "332e0352-a834-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_fuel_bg"
                },
                "file": {
                    "filename": "sprite_fuel_bg.png",
                    "hash": "96ef290379dc19515cd7b4c904ebf3d0",
                    "size": 1410,
                    "url": "assets/playcanvas/swooop/33/332e0352-a834-11e3-80f1-22000a4a0339/sprite_fuel_bg.png"
                },
                "has_thumbnail": true,
                "name": "sprite_fuel_bg",
                "resource_id": "332e0352-a834-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "34cd9f74-a834-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_gameover"
                },
                "file": {
                    "filename": "sprite_gameover.png",
                    "hash": "b7987beea851eb2314d9a9cdef190907",
                    "size": 3539,
                    "url": "assets/playcanvas/swooop/34/34cd9f74-a834-11e3-80f1-22000a4a0339/sprite_gameover.png"
                },
                "has_thumbnail": true,
                "name": "sprite_gameover",
                "resource_id": "34cd9f74-a834-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "34cf100c-a834-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_gameover_red"
                },
                "file": {
                    "filename": "sprite_gameover_red.png",
                    "hash": "de3efad54fed681f5d41a529297806bf",
                    "size": 10658,
                    "url": "assets/playcanvas/swooop/34/34cf100c-a834-11e3-80f1-22000a4a0339/sprite_gameover_red.png"
                },
                "has_thumbnail": true,
                "name": "sprite_gameover_red",
                "resource_id": "34cf100c-a834-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "35675884-9ee9-11e3-886a-22000a4a0339": {
                "data": {
                    "name": "pilot",
                    "parameters": [
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "e60c71e6-9ef9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 25,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "pilot",
                "resource_id": "35675884-9ee9-11e3-886a-22000a4a0339",
                "type": "material"
            },
            "38092436-ae03-11e3-a88c-22000a4a0339": {
                "data": {
                    "name": "Screenshot Box",
                    "parameters": [
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.054901961237192154,
                                0.38823530077934265,
                                0.1411764770746231
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 25,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "Screenshot Box",
                "resource_id": "38092436-ae03-11e3-a88c-22000a4a0339",
                "type": "material"
            },
            "39935ed6-a834-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_hiscore"
                },
                "file": {
                    "filename": "sprite_hiscore.png",
                    "hash": "7efcc251437b986f791c13f5e2b6d178",
                    "size": 3523,
                    "url": "assets/playcanvas/swooop/39/39935ed6-a834-11e3-80f1-22000a4a0339/sprite_hiscore.png"
                },
                "has_thumbnail": true,
                "name": "sprite_hiscore",
                "resource_id": "39935ed6-a834-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "39a27c2e-a927-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_streak_4"
                },
                "file": {
                    "filename": "sprite_streak_4.png",
                    "hash": "6308b2f038d39b06a8b38c85486905fe",
                    "size": 4085,
                    "url": "assets/playcanvas/swooop/39/39a27c2e-a927-11e3-80f1-22000a4a0339/sprite_streak_4.png"
                },
                "has_thumbnail": true,
                "name": "sprite_streak_4",
                "resource_id": "39a27c2e-a927-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "3a7e768e-a927-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_streak_3"
                },
                "file": {
                    "filename": "sprite_streak_3.png",
                    "hash": "770863db9b6470c4e9c442c038a6d9c9",
                    "size": 4216,
                    "url": "assets/playcanvas/swooop/3a/3a7e768e-a927-11e3-80f1-22000a4a0339/sprite_streak_3.png"
                },
                "has_thumbnail": true,
                "name": "sprite_streak_3",
                "resource_id": "3a7e768e-a927-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "3d4c62cc-a927-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_streak_2"
                },
                "file": {
                    "filename": "sprite_streak_2.png",
                    "hash": "4aa9232392b023a88201d8d78d84b7c2",
                    "size": 4057,
                    "url": "assets/playcanvas/swooop/3d/3d4c62cc-a927-11e3-80f1-22000a4a0339/sprite_streak_2.png"
                },
                "has_thumbnail": true,
                "name": "sprite_streak_2",
                "resource_id": "3d4c62cc-a927-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "3e0fccd6-a476-11e3-b4e6-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "3f365e9a-a476-11e3-9135-22000a4a0339"
                        },
                        {
                            "material": "3f365e9a-a476-11e3-9135-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "Mill_wheel.json",
                    "hash": "847d0428d50b46962518722f7c93b8d1",
                    "size": 557145,
                    "url": "assets/playcanvas/swooop/3e/3e0fccd6-a476-11e3-b4e6-22000a4a0339/Mill_wheel.json"
                },
                "has_thumbnail": false,
                "name": "Mill_wheel",
                "resource_id": "3e0fccd6-a476-11e3-b4e6-22000a4a0339",
                "type": "model"
            },
            "3e4caa7a-a476-11e3-b4e6-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "Mill_wheel_animation.json",
                    "hash": "3ad38a1835c1fb42343fc6543b269510",
                    "size": 587,
                    "url": "assets/playcanvas/swooop/3e/3e4caa7a-a476-11e3-b4e6-22000a4a0339/Mill_wheel_animation.json"
                },
                "has_thumbnail": false,
                "name": "Mill_wheel",
                "resource_id": "3e4caa7a-a476-11e3-b4e6-22000a4a0339",
                "type": "animation"
            },
            "3f365e9a-a476-11e3-9135-22000a4a0339": {
                "data": {
                    "name": "Mill",
                    "parameters": [
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "48fede70-a476-11e3-9135-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "Mill",
                "resource_id": "3f365e9a-a476-11e3-9135-22000a4a0339",
                "type": "material"
            },
            "3fbcc47a-a927-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_streak_1"
                },
                "file": {
                    "filename": "sprite_streak_1.png",
                    "hash": "f144cb230310c31721e42d935d88511d",
                    "size": 3782,
                    "url": "assets/playcanvas/swooop/3f/3fbcc47a-a927-11e3-80f1-22000a4a0339/sprite_streak_1.png"
                },
                "has_thumbnail": true,
                "name": "sprite_streak_1",
                "resource_id": "3fbcc47a-a927-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "4177f938-a927-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_streak_5"
                },
                "file": {
                    "filename": "sprite_streak_5.png",
                    "hash": "a32de665f70b12a36f4d7155008a3c17",
                    "size": 4093,
                    "url": "assets/playcanvas/swooop/41/4177f938-a927-11e3-80f1-22000a4a0339/sprite_streak_5.png"
                },
                "has_thumbnail": true,
                "name": "sprite_streak_5",
                "resource_id": "4177f938-a927-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "422b82d0-abb3-11e3-a1b7-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "eb3d31ce-9fbb-11e3-988e-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "A_pine_trees.json",
                    "hash": "ab37eb5851f880793bd4157110522db9",
                    "size": 657040,
                    "url": "assets/playcanvas/swooop/42/422b82d0-abb3-11e3-a1b7-22000a4a0339/A_pine_trees.json"
                },
                "has_thumbnail": false,
                "name": "A_pine_trees",
                "resource_id": "422b82d0-abb3-11e3-a1b7-22000a4a0339",
                "type": "model"
            },
            "4458b826-9311-11e3-9053-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "5c4018da-9992-11e3-86ac-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "Sky_cylinder.json",
                    "hash": "fd94971d35fd052c0aa23d0acba943bd",
                    "size": 59469,
                    "url": "assets/playcanvas/swooop/44/4458b826-9311-11e3-9053-22000a219e93/Sky_cylinder.json"
                },
                "has_thumbnail": false,
                "name": "Sky_cylinder",
                "resource_id": "4458b826-9311-11e3-9053-22000a219e93",
                "type": "model"
            },
            "44f100fe-9311-11e3-8d2a-22000a219e93": {
                "data": {
                    "name": "bonus_BG",
                    "parameters": [
                        {
                            "data": [
                                0.05098039284348488,
                                0.0470588244497776,
                                0.0470588244497776
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.01568627543747425,
                                0.01568627543747425,
                                0.01568627543747425
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": "52edd4b0-989e-11e3-86ac-22000a219e93",
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                5
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "bonus_BG",
                "resource_id": "44f100fe-9311-11e3-8d2a-22000a219e93",
                "type": "material"
            },
            "48fede70-a476-11e3-9135-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "mill"
                },
                "file": {
                    "filename": "mill.jpg",
                    "hash": "bff43c915e340c23a331cc28d414f3b3",
                    "size": 79956,
                    "url": "assets/playcanvas/swooop/48/48fede70-a476-11e3-9135-22000a4a0339/mill.jpg"
                },
                "has_thumbnail": true,
                "name": "mill",
                "resource_id": "48fede70-a476-11e3-9135-22000a4a0339",
                "type": "texture"
            },
            "4a8f0a76-9288-11e3-abce-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "a79bb6bc-9fa6-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "bridge.json",
                    "hash": "c521e15ade0f49e44baec20846749a62",
                    "size": 180465,
                    "url": "assets/playcanvas/swooop/4a/4a8f0a76-9288-11e3-abce-22000a219e93/bridge.json"
                },
                "has_thumbnail": false,
                "name": "bridge",
                "resource_id": "4a8f0a76-9288-11e3-abce-22000a219e93",
                "type": "model"
            },
            "4f9a58c0-9fa5-11e3-9d23-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "50cb69f0-9fa5-11e3-81e9-22000a4a0339"
                        },
                        {
                            "material": "50cb69f0-9fa5-11e3-81e9-22000a4a0339"
                        },
                        {
                            "material": "50cb69f0-9fa5-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "rocks.json",
                    "hash": "593f78952e481f5e384aef9a65e36d87",
                    "size": 822727,
                    "url": "assets/playcanvas/swooop/4f/4f9a58c0-9fa5-11e3-9d23-22000a4a0339/rocks.json"
                },
                "has_thumbnail": false,
                "name": "rocks",
                "resource_id": "4f9a58c0-9fa5-11e3-9d23-22000a4a0339",
                "type": "model"
            },
            "50cb69f0-9fa5-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "rocks",
                    "parameters": [
                        {
                            "data": [
                                0.18431372940540314,
                                0.1764705926179886,
                                0.16862745583057404
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.18431372940540314,
                                0.1764705926179886,
                                0.16862745583057404
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "bf2fca82-a309-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1.07,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "rocks",
                "resource_id": "50cb69f0-9fa5-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "52227882-a2f9-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "music_bonus_mode.mp3",
                    "hash": "47fc6925cb45811ec7b3881cd3d8d607",
                    "size": 687959,
                    "url": "assets/playcanvas/swooop/52/52227882-a2f9-11e3-81e9-22000a4a0339/music_bonus_mode.mp3"
                },
                "has_thumbnail": false,
                "name": "music_bonus_mode",
                "resource_id": "52227882-a2f9-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "53008788-9fea-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "towers",
                    "parameters": [
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "d1c85528-9fea-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "towers",
                "resource_id": "53008788-9fea-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "534a2b12-9fa5-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "bridge_1"
                },
                "file": {
                    "filename": "bridge_1.jpg",
                    "hash": "e97b509592ed617cb08a036a81d1a937",
                    "size": 65638,
                    "url": "assets/playcanvas/swooop/53/534a2b12-9fa5-11e3-81e9-22000a4a0339/bridge_1.jpg"
                },
                "has_thumbnail": true,
                "name": "bridge_1",
                "resource_id": "534a2b12-9fa5-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "544fe00e-9958-11e3-93b0-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "f50e0fde-9255-11e3-8d2a-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "lake.json",
                    "hash": "3c0d2151ce7c535209a16a3449815fcf",
                    "size": 54771,
                    "url": "assets/playcanvas/swooop/54/544fe00e-9958-11e3-93b0-22000a219e93/lake.json"
                },
                "has_thumbnail": false,
                "name": "lake",
                "resource_id": "544fe00e-9958-11e3-93b0-22000a219e93",
                "type": "model"
            },
            "551055b0-a082-11e3-b1fa-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "563e8cd6-a082-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "poplar_tree.json",
                    "hash": "b30458985d42c905d0fc242114600e9c",
                    "size": 18168,
                    "url": "assets/playcanvas/swooop/55/551055b0-a082-11e3-b1fa-22000a4a0339/poplar_tree.json"
                },
                "has_thumbnail": false,
                "name": "poplar_tree",
                "resource_id": "551055b0-a082-11e3-b1fa-22000a4a0339",
                "type": "model"
            },
            "561719c0-abaf-11e3-a981-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "04f50446-a0bd-11e3-bc01-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "A_cows.json",
                    "hash": "55d12706dc1e1fea31471da6282c4190",
                    "size": 1392097,
                    "url": "assets/playcanvas/swooop/56/561719c0-abaf-11e3-a981-22000a4a0339/A_cows.json"
                },
                "has_thumbnail": false,
                "name": "A_cows",
                "resource_id": "561719c0-abaf-11e3-a981-22000a4a0339",
                "type": "model"
            },
            "563e8cd6-a082-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "poplar_trees",
                    "parameters": [
                        {
                            "data": [
                                0.08235294371843338,
                                0.1921568661928177,
                                0.09019608050584793
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.08235294371843338,
                                0.1921568661928177,
                                0.09019608050584793
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "59da2f62-a082-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "poplar_trees",
                "resource_id": "563e8cd6-a082-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "59da2f62-a082-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "poplar_trees"
                },
                "file": {
                    "filename": "poplar_trees.jpg",
                    "hash": "24f330820a70fec11ed822ad552641aa",
                    "size": 9473,
                    "url": "assets/playcanvas/swooop/59/59da2f62-a082-11e3-81e9-22000a4a0339/poplar_trees.jpg"
                },
                "has_thumbnail": true,
                "name": "poplar_trees",
                "resource_id": "59da2f62-a082-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "5b265730-9f22-11e3-85aa-22000a4a0339": {
                "data": {
                    "name": "castle rocks",
                    "parameters": [
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "5c03be1c-9f1e-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 25,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "castle rocks",
                "resource_id": "5b265730-9f22-11e3-85aa-22000a4a0339",
                "type": "material"
            },
            "5c03be1c-9f1e-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "castle_rocks"
                },
                "file": {
                    "filename": "castle_rocks.jpg",
                    "hash": "ffd5598b98dfd0bc9f930dab93c587b3",
                    "size": 55015,
                    "url": "assets/playcanvas/swooop/5c/5c03be1c-9f1e-11e3-81e9-22000a4a0339/castle_rocks.jpg"
                },
                "has_thumbnail": true,
                "name": "castle_rocks",
                "resource_id": "5c03be1c-9f1e-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "5c4018da-9992-11e3-86ac-22000a219e93": {
                "data": {
                    "name": "sky",
                    "parameters": [
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.12156862765550613,
                                0.12156862765550613,
                                0.12156862765550613
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 0,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": "b41ef442-9ef9-11e3-81e9-22000a4a0339",
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "sky",
                "resource_id": "5c4018da-9992-11e3-86ac-22000a219e93",
                "type": "material"
            },
            "5cce3e1a-9efd-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "bonus_BG_02"
                },
                "file": {
                    "filename": "bonus_BG_02.jpg",
                    "hash": "afe09c084872e5ea11a0bd7b1123e943",
                    "size": 27313,
                    "url": "assets/playcanvas/swooop/5c/5cce3e1a-9efd-11e3-81e9-22000a4a0339/bonus_BG_02.jpg"
                },
                "has_thumbnail": true,
                "name": "bonus_BG_02",
                "resource_id": "5cce3e1a-9efd-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "6129aa82-9f1e-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "castle_towers"
                },
                "file": {
                    "filename": "castle_towers.jpg",
                    "hash": "ab658973c36c05432eaaa7caf076946e",
                    "size": 107196,
                    "url": "assets/playcanvas/swooop/61/6129aa82-9f1e-11e3-81e9-22000a4a0339/castle_towers.jpg"
                },
                "has_thumbnail": true,
                "name": "castle_towers",
                "resource_id": "6129aa82-9f1e-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "612fc6d4-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_5.mp3",
                    "hash": "1f7fab64b5f012666997a05aac853d0f",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/61/612fc6d4-a09e-11e3-81e9-22000a4a0339/note_5.mp3"
                },
                "has_thumbnail": false,
                "name": "note_5",
                "resource_id": "612fc6d4-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "6141dca2-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_4.mp3",
                    "hash": "53229dddb10705679e80913cc467bf8f",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/61/6141dca2-a09e-11e3-81e9-22000a4a0339/note_4.mp3"
                },
                "has_thumbnail": false,
                "name": "note_4",
                "resource_id": "6141dca2-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "6342a48e-932c-11e3-95a5-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "8a96263a-8f78-11e3-b4c6-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "cloud001.json",
                    "hash": "233f71b6db029dcca31d007867ee27b6",
                    "size": 47563,
                    "url": "assets/playcanvas/swooop/63/6342a48e-932c-11e3-95a5-22000a219e93/cloud001.json"
                },
                "has_thumbnail": false,
                "name": "cloud001",
                "resource_id": "6342a48e-932c-11e3-95a5-22000a219e93",
                "type": "model"
            },
            "635ba392-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_3.mp3",
                    "hash": "5cdbe1d3aa1d23c332207a2f0417f47f",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/63/635ba392-a09e-11e3-81e9-22000a4a0339/note_3.mp3"
                },
                "has_thumbnail": false,
                "name": "note_3",
                "resource_id": "635ba392-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "6377f286-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_2.mp3",
                    "hash": "f50b5e68b3b56da75c50d1275b2ba8b7",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/63/6377f286-a09e-11e3-81e9-22000a4a0339/note_2.mp3"
                },
                "has_thumbnail": false,
                "name": "note_2",
                "resource_id": "6377f286-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "652c495a-a833-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_lowfuel"
                },
                "file": {
                    "filename": "sprite_lowfuel.png",
                    "hash": "a8cca9b6870b9325e083f6b4735b87f2",
                    "size": 9216,
                    "url": "assets/playcanvas/swooop/65/652c495a-a833-11e3-80f1-22000a4a0339/sprite_lowfuel.png"
                },
                "has_thumbnail": true,
                "name": "sprite_lowfuel",
                "resource_id": "652c495a-a833-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "653bc2d2-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_1.mp3",
                    "hash": "95a90e16c861cdef8bfcf9f0a3d6fcd1",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/65/653bc2d2-a09e-11e3-81e9-22000a4a0339/note_1.mp3"
                },
                "has_thumbnail": false,
                "name": "note_1",
                "resource_id": "653bc2d2-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "653c6b88-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_8.mp3",
                    "hash": "d1d2c29dd237dae287ffff740b9af875",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/65/653c6b88-a09e-11e3-81e9-22000a4a0339/note_8.mp3"
                },
                "has_thumbnail": false,
                "name": "note_8",
                "resource_id": "653c6b88-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "65fdef96-9f1e-11e3-92ed-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "5b265730-9f22-11e3-85aa-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "castle_rocks.json",
                    "hash": "8d40cd7d7878f5b3599cb8d5a5212907",
                    "size": 174031,
                    "url": "assets/playcanvas/swooop/65/65fdef96-9f1e-11e3-92ed-22000a4a0339/castle_rocks.json"
                },
                "has_thumbnail": false,
                "name": "castle_rocks",
                "resource_id": "65fdef96-9f1e-11e3-92ed-22000a4a0339",
                "type": "model"
            },
            "66b4b24e-a833-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_share"
                },
                "file": {
                    "filename": "sprite_share.png",
                    "hash": "b90c0bc1082d0ad06bcfb21f78ee7fc9",
                    "size": 1732,
                    "url": "assets/playcanvas/swooop/66/66b4b24e-a833-11e3-80f1-22000a4a0339/sprite_share.png"
                },
                "has_thumbnail": true,
                "name": "sprite_share",
                "resource_id": "66b4b24e-a833-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "66ba9dd0-a833-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_pause"
                },
                "file": {
                    "filename": "sprite_pause.png",
                    "hash": "e0e44a19c49ef9debf431c47613ae8c6",
                    "size": 312,
                    "url": "assets/playcanvas/swooop/66/66ba9dd0-a833-11e3-80f1-22000a4a0339/sprite_pause.png"
                },
                "has_thumbnail": true,
                "name": "sprite_pause",
                "resource_id": "66ba9dd0-a833-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "690ef874-a833-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_score"
                },
                "file": {
                    "filename": "sprite_score.png",
                    "hash": "9fc6deaecfabc5d2b2f2d7b4c1e186e0",
                    "size": 2490,
                    "url": "assets/playcanvas/swooop/69/690ef874-a833-11e3-80f1-22000a4a0339/sprite_score.png"
                },
                "has_thumbnail": true,
                "name": "sprite_score",
                "resource_id": "690ef874-a833-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "6c925b88-aa97-11e3-ae1e-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "eb3d31ce-9fbb-11e3-988e-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "pine_bush_01.json",
                    "hash": "097cb3a04705873a8169dc0e0ab799c2",
                    "size": 7518,
                    "url": "assets/playcanvas/swooop/6c/6c925b88-aa97-11e3-ae1e-22000a4a0339/pine_bush_01.json"
                },
                "has_thumbnail": false,
                "name": "pine_bush_01",
                "resource_id": "6c925b88-aa97-11e3-ae1e-22000a4a0339",
                "type": "model"
            },
            "6e13f6c6-8cd6-11e3-8222-22000a219e93": {
                "data": {
                    "name": "BonusEffect",
                    "parameters": [
                        {
                            "data": [
                                0.05098039284348488,
                                0.0470588244497776,
                                0.0470588244497776
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.03921568766236305,
                                0.03529411926865578,
                                0.03529411926865578
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 25,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": "5cce3e1a-9efd-11e3-81e9-22000a4a0339",
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                6,
                                9
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "BonusEffect",
                "resource_id": "6e13f6c6-8cd6-11e3-8222-22000a219e93",
                "type": "material"
            },
            "70ff183e-a0a9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "cow"
                },
                "file": {
                    "filename": "cow.jpg",
                    "hash": "9faf31adeaf31fa88a34d6a6624e734f",
                    "size": 9045,
                    "url": "assets/playcanvas/swooop/70/70ff183e-a0a9-11e3-81e9-22000a4a0339/cow.jpg"
                },
                "has_thumbnail": true,
                "name": "cow",
                "resource_id": "70ff183e-a0a9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "7566d87c-93dd-11e3-8a04-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "a028f184-a15d-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "Hot_air_balloon.json",
                    "hash": "50efdfa1d3fb126671417a644a176270",
                    "size": 404704,
                    "url": "assets/playcanvas/swooop/75/7566d87c-93dd-11e3-8a04-22000a219e93/Hot_air_balloon.json"
                },
                "has_thumbnail": false,
                "name": "Hot_air_balloon",
                "resource_id": "7566d87c-93dd-11e3-8a04-22000a219e93",
                "type": "model"
            },
            "76cac26a-a0bb-11e3-adb5-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "78536740-a0bb-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "lime_A.json",
                    "hash": "130e5322bfd46ac2d5d0b6214f0d7db7",
                    "size": 73419,
                    "url": "assets/playcanvas/swooop/76/76cac26a-a0bb-11e3-adb5-22000a4a0339/lime_A.json"
                },
                "has_thumbnail": false,
                "name": "lime_A",
                "resource_id": "76cac26a-a0bb-11e3-adb5-22000a4a0339",
                "type": "model"
            },
            "77520b6c-a0bb-11e3-880e-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "78536740-a0bb-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "lime_B.json",
                    "hash": "ec8e9a5295ca80db4f6e84d29a204d7e",
                    "size": 47052,
                    "url": "assets/playcanvas/swooop/77/77520b6c-a0bb-11e3-880e-22000a4a0339/lime_B.json"
                },
                "has_thumbnail": false,
                "name": "lime_B",
                "resource_id": "77520b6c-a0bb-11e3-880e-22000a4a0339",
                "type": "model"
            },
            "7782713e-a314-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "willow"
                },
                "file": {
                    "filename": "willow.jpg",
                    "hash": "b48329ffd939a4a8ceea0f54e4fd47a8",
                    "size": 17264,
                    "url": "assets/playcanvas/swooop/77/7782713e-a314-11e3-81e9-22000a4a0339/willow.jpg"
                },
                "has_thumbnail": true,
                "name": "willow",
                "resource_id": "7782713e-a314-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "78536740-a0bb-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "lime_trees",
                    "parameters": [
                        {
                            "data": [
                                0.0313725508749485,
                                0.0941176488995552,
                                0.054901961237192154
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.0313725508749485,
                                0.0941176488995552,
                                0.054901961237192154
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "bc7438f0-9ef9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "lime_trees",
                "resource_id": "78536740-a0bb-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "7853d9a4-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_10.mp3",
                    "hash": "617b112ab2e45d3270dcaf1c01cd989b",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/78/7853d9a4-a09e-11e3-81e9-22000a4a0339/note_10.mp3"
                },
                "has_thumbnail": false,
                "name": "note_10",
                "resource_id": "7853d9a4-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "78fbbfd2-8516-11e3-a96a-22000a219e93": {
                "data": {
                    "name": "GameOver",
                    "parameters": [
                        {
                            "data": [
                                0.01568627543747425,
                                0.01568627543747425,
                                0.01568627543747425
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.05098039284348488,
                                0.0470588244497776,
                                0.0470588244497776
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 25,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": "6313028e-8516-11e3-a122-22000a219e93",
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "GameOver",
                "resource_id": "78fbbfd2-8516-11e3-a96a-22000a219e93",
                "type": "material"
            },
            "797290b4-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_7.mp3",
                    "hash": "fc3b0c5470c0d8379ef55a580de08c40",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/79/797290b4-a09e-11e3-81e9-22000a4a0339/note_7.mp3"
                },
                "has_thumbnail": false,
                "name": "note_7",
                "resource_id": "797290b4-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "7bb7efa4-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_13.mp3",
                    "hash": "692f582de0eb5c571d32763511a554a1",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/7b/7bb7efa4-a09e-11e3-81e9-22000a4a0339/note_13.mp3"
                },
                "has_thumbnail": false,
                "name": "note_13",
                "resource_id": "7bb7efa4-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "7bc5dc0e-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_14.mp3",
                    "hash": "e7fb39aca9399ac78f473dbd5fd299ff",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/7b/7bc5dc0e-a09e-11e3-81e9-22000a4a0339/note_14.mp3"
                },
                "has_thumbnail": false,
                "name": "note_14",
                "resource_id": "7bc5dc0e-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "7bfdfe52-abb8-11e3-9951-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "9c6e4d14-9fb4-11e3-b72f-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "A_sheep.json",
                    "hash": "8217248bbd9b230cb6f22c06746a5798",
                    "size": 1394594,
                    "url": "assets/playcanvas/swooop/7b/7bfdfe52-abb8-11e3-9951-22000a4a0339/A_sheep.json"
                },
                "has_thumbnail": false,
                "name": "A_sheep",
                "resource_id": "7bfdfe52-abb8-11e3-9951-22000a4a0339",
                "type": "model"
            },
            "7e1410de-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_9.mp3",
                    "hash": "90ed37c66beaf711f17ae0e3f5bd11f6",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/7e/7e1410de-a09e-11e3-81e9-22000a4a0339/note_9.mp3"
                },
                "has_thumbnail": false,
                "name": "note_9",
                "resource_id": "7e1410de-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "7e7fdcec-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_11.mp3",
                    "hash": "641abaf049038e8e93722ba7de07cc7d",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/7e/7e7fdcec-a09e-11e3-81e9-22000a4a0339/note_11.mp3"
                },
                "has_thumbnail": false,
                "name": "note_11",
                "resource_id": "7e7fdcec-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "8159992e-9961-11e3-bb17-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "dd095242-a2f7-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "willow_trees.json",
                    "hash": "4b1332ad3541a12dbea89eef0c4d29cb",
                    "size": 90244,
                    "url": "assets/playcanvas/swooop/81/8159992e-9961-11e3-bb17-22000a219e93/willow_trees.json"
                },
                "has_thumbnail": false,
                "name": "willow_trees",
                "resource_id": "8159992e-9961-11e3-bb17-22000a219e93",
                "type": "model"
            },
            "81b2de8c-995f-11e3-8ddf-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "823a10be-995f-11e3-86ac-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "geese.json",
                    "hash": "7ed72975cb50af6a9609ec53a780bb02",
                    "size": 266088,
                    "url": "assets/playcanvas/swooop/81/81b2de8c-995f-11e3-8ddf-22000a219e93/geese.json"
                },
                "has_thumbnail": false,
                "name": "geese",
                "resource_id": "81b2de8c-995f-11e3-8ddf-22000a219e93",
                "type": "model"
            },
            "823a10be-995f-11e3-86ac-22000a219e93": {
                "data": {
                    "name": "geese",
                    "parameters": [
                        {
                            "data": [
                                0.9686274528503418,
                                0.9490196108818054,
                                0.9215686321258545
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.9686274528503418,
                                0.9490196108818054,
                                0.9215686321258545
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0.13333334028720856,
                                0.13333334028720856,
                                0.13333334028720856
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0.1568627506494522,
                                0.1568627506494522,
                                0.1568627506494522
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "geese",
                "resource_id": "823a10be-995f-11e3-86ac-22000a219e93",
                "type": "material"
            },
            "8a1b7974-9f1f-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "castle_walls"
                },
                "file": {
                    "filename": "castle_walls.jpg",
                    "hash": "91dea339a5e2788073c18fe47e661621",
                    "size": 107082,
                    "url": "assets/playcanvas/swooop/8a/8a1b7974-9f1f-11e3-81e9-22000a4a0339/castle_walls.jpg"
                },
                "has_thumbnail": true,
                "name": "castle_walls",
                "resource_id": "8a1b7974-9f1f-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "8a3d5528-8f78-11e3-a664-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "8a96263a-8f78-11e3-b4c6-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "clouds.json",
                    "hash": "cb879d396644dd9d0ca28e41f9b2bd46",
                    "size": 364818,
                    "url": "assets/playcanvas/swooop/8a/8a3d5528-8f78-11e3-a664-22000a219e93/clouds.json"
                },
                "has_thumbnail": false,
                "name": "clouds",
                "resource_id": "8a3d5528-8f78-11e3-a664-22000a219e93",
                "type": "model"
            },
            "8a96263a-8f78-11e3-b4c6-22000a219e93": {
                "data": {
                    "name": "cloud",
                    "parameters": [
                        {
                            "data": [
                                0.886274516582489,
                                0.8745098114013672,
                                0.9490196108818054
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.886274516582489,
                                0.8745098114013672,
                                0.9490196108818054
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1.07,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0.35686275362968445,
                                0.29411765933036804,
                                0.29411765933036804
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "cloud",
                "resource_id": "8a96263a-8f78-11e3-b4c6-22000a219e93",
                "type": "material"
            },
            "915288ba-a472-11e3-9135-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "bonus_gem.mp3",
                    "hash": "aed99cf885eadec203a6c856eb27c018",
                    "size": 88606,
                    "url": "assets/playcanvas/swooop/91/915288ba-a472-11e3-9135-22000a4a0339/bonus_gem.mp3"
                },
                "has_thumbnail": false,
                "name": "bonus_gem",
                "resource_id": "915288ba-a472-11e3-9135-22000a4a0339",
                "type": "audio"
            },
            "91c5833c-a92d-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_bonus_fg"
                },
                "file": {
                    "filename": "sprite_bonus_fg.png",
                    "hash": "7f1b9afe8661786a6857f5bdc83d2834",
                    "size": 1147,
                    "url": "assets/playcanvas/swooop/91/91c5833c-a92d-11e3-80f1-22000a4a0339/sprite_bonus_fg.png"
                },
                "has_thumbnail": true,
                "name": "sprite_bonus_fg",
                "resource_id": "91c5833c-a92d-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "92b0b1c8-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_16.mp3",
                    "hash": "30c00ad9ab40cd079980d72adefa2a6f",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/92/92b0b1c8-a09e-11e3-81e9-22000a4a0339/note_16.mp3"
                },
                "has_thumbnail": false,
                "name": "note_16",
                "resource_id": "92b0b1c8-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "92dd4c92-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_15.mp3",
                    "hash": "4507949aabe4b508dac04d95f4c1ef2c",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/92/92dd4c92-a09e-11e3-81e9-22000a4a0339/note_15.mp3"
                },
                "has_thumbnail": false,
                "name": "note_15",
                "resource_id": "92dd4c92-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "948d6d10-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_12.mp3",
                    "hash": "e91fb252b57f6e7e940bb7a5e8e6906d",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/94/948d6d10-a09e-11e3-81e9-22000a4a0339/note_12.mp3"
                },
                "has_thumbnail": false,
                "name": "note_12",
                "resource_id": "948d6d10-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "962637e2-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_6.mp3",
                    "hash": "498b526f8895794dbe92602fcba41dcb",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/96/962637e2-a09e-11e3-81e9-22000a4a0339/note_6.mp3"
                },
                "has_thumbnail": false,
                "name": "note_6",
                "resource_id": "962637e2-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "96268558-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_17.mp3",
                    "hash": "8a21ade8a535ceacc969adf342c98107",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/96/96268558-a09e-11e3-81e9-22000a4a0339/note_17.mp3"
                },
                "has_thumbnail": false,
                "name": "note_17",
                "resource_id": "96268558-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "97b3af8c-9fe9-11e3-b1da-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "53008788-9fea-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "towers.json",
                    "hash": "0b62c311c2f89d593ae3c699fd4d7429",
                    "size": 779760,
                    "url": "assets/playcanvas/swooop/97/97b3af8c-9fe9-11e3-b1da-22000a4a0339/towers.json"
                },
                "has_thumbnail": false,
                "name": "towers",
                "resource_id": "97b3af8c-9fe9-11e3-b1da-22000a4a0339",
                "type": "model"
            },
            "9829d418-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_18.mp3",
                    "hash": "0724c0c0c719b3eeaa0e014943792c22",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/98/9829d418-a09e-11e3-81e9-22000a4a0339/note_18.mp3"
                },
                "has_thumbnail": false,
                "name": "note_18",
                "resource_id": "9829d418-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "98603acc-9fe9-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "castle",
                    "parameters": [
                        {
                            "data": [
                                0.529412,
                                0.498039,
                                0.466667
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.529412,
                                0.498039,
                                0.466667
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "castle",
                "resource_id": "98603acc-9fe9-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "99d29f30-b37b-11e3-b2db-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "engine.mp3",
                    "hash": "4eec736645f315052051a7505b41b89b",
                    "size": 65152,
                    "url": "assets/playcanvas/swooop/99/99d29f30-b37b-11e3-b2db-22000a4a0339/engine.mp3"
                },
                "has_thumbnail": false,
                "name": "engine",
                "resource_id": "99d29f30-b37b-11e3-b2db-22000a4a0339",
                "type": "audio"
            },
            "9c6e4d14-9fb4-11e3-b72f-22000a4a0339": {
                "data": {
                    "name": "sheep",
                    "parameters": [
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "c977fb04-9ef9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 25,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0.054901961237192154,
                                0.054901961237192154,
                                0.054901961237192154
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "sheep",
                "resource_id": "9c6e4d14-9fb4-11e3-b72f-22000a4a0339",
                "type": "material"
            },
            "9d34460a-a09e-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "note_19.mp3",
                    "hash": "73ae76c518756853f66c5d5d30af55c4",
                    "size": 85262,
                    "url": "assets/playcanvas/swooop/9d/9d34460a-a09e-11e3-81e9-22000a4a0339/note_19.mp3"
                },
                "has_thumbnail": false,
                "name": "note_19",
                "resource_id": "9d34460a-a09e-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "a028f184-a15d-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "hot_air_balloon",
                    "parameters": [
                        {
                            "data": [
                                1,
                                0.33725491166114807,
                                0.13725490868091583
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                1,
                                0.33725491166114807,
                                0.13725490868091583
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "a7cd0272-a15d-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "hot_air_balloon",
                "resource_id": "a028f184-a15d-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "a3841db8-9f28-11e3-b187-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "eb3d31ce-9fbb-11e3-988e-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "pine_bushes.json",
                    "hash": "b543540df871a3739a11d9a0888c203f",
                    "size": 92228,
                    "url": "assets/playcanvas/swooop/a3/a3841db8-9f28-11e3-b187-22000a4a0339/pine_bushes.json"
                },
                "has_thumbnail": false,
                "name": "pine_bushes",
                "resource_id": "a3841db8-9f28-11e3-b187-22000a4a0339",
                "type": "model"
            },
            "a39e4e42-9954-11e3-b866-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "eb3d31ce-9fbb-11e3-988e-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "bushes.json",
                    "hash": "4dc4c61556a959e2add98358fe74b7a6",
                    "size": 90237,
                    "url": "assets/playcanvas/swooop/a3/a39e4e42-9954-11e3-b866-22000a219e93/bushes.json"
                },
                "has_thumbnail": false,
                "name": "bushes",
                "resource_id": "a39e4e42-9954-11e3-b866-22000a219e93",
                "type": "model"
            },
            "a79bb6bc-9fa6-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "bridge_1",
                    "parameters": [
                        {
                            "data": [
                                0.1764705926179886,
                                0.16862745583057404,
                                0.20000000298023224
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.1764705926179886,
                                0.16862745583057404,
                                0.20000000298023224
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "534a2b12-9fa5-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1.07,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "bridge_1",
                "resource_id": "a79bb6bc-9fa6-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "a7cd0272-a15d-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "balloon"
                },
                "file": {
                    "filename": "balloon.jpg",
                    "hash": "78edae693f9f47c5c8240ec4b956e9e8",
                    "size": 38370,
                    "url": "assets/playcanvas/swooop/a7/a7cd0272-a15d-11e3-81e9-22000a4a0339/balloon.jpg"
                },
                "has_thumbnail": true,
                "name": "balloon",
                "resource_id": "a7cd0272-a15d-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "aa3ea15e-a096-11e3-b36b-22000a4a0339": {
                "data": {
                    "name": "fir_trees",
                    "parameters": [
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "267f8fd6-a096-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 25,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "fir_trees",
                "resource_id": "aa3ea15e-a096-11e3-b36b-22000a4a0339",
                "type": "material"
            },
            "abc8bffe-97c3-11e3-b794-22000a219e93": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "smoke"
                },
                "file": {
                    "filename": "smoke.jpg",
                    "hash": "f064fc339a3bccb1abe93ffbf74a114a",
                    "size": 5991,
                    "url": "assets/playcanvas/swooop/ab/abc8bffe-97c3-11e3-b794-22000a219e93/smoke.jpg"
                },
                "has_thumbnail": true,
                "name": "smoke",
                "resource_id": "abc8bffe-97c3-11e3-b794-22000a219e93",
                "type": "texture"
            },
            "acc83bdc-97c3-11e3-b794-22000a219e93": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "smoke_alpha"
                },
                "file": {
                    "filename": "smoke_alpha.jpg",
                    "hash": "224869b32db1feb11ead09e597d59b78",
                    "size": 4676,
                    "url": "assets/playcanvas/swooop/ac/acc83bdc-97c3-11e3-b794-22000a219e93/smoke_alpha.jpg"
                },
                "has_thumbnail": true,
                "name": "smoke_alpha",
                "resource_id": "acc83bdc-97c3-11e3-b794-22000a219e93",
                "type": "texture"
            },
            "b41ef442-9ef9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "Sky01"
                },
                "file": {
                    "filename": "Sky01.jpg",
                    "hash": "d0159f22acc3dbc715e97ea88724a1bd",
                    "size": 14104,
                    "url": "assets/playcanvas/swooop/b4/b41ef442-9ef9-11e3-81e9-22000a4a0339/Sky01.jpg"
                },
                "has_thumbnail": true,
                "name": "Sky01",
                "resource_id": "b41ef442-9ef9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "b7e64f48-a2c9-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "gem_C",
                    "parameters": [
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "ced314fc-a2c9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0.29019609093666077,
                                0.37254902720451355
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": "062db338-a15f-11e3-81e9-22000a4a0339",
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "gem_C",
                "resource_id": "b7e64f48-a2c9-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "b80e5ff6-a2c9-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "gem_D",
                    "parameters": [
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "ce3eb668-a2c9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0.364705890417099,
                                0,
                                0.4431372582912445
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": "062db338-a15f-11e3-81e9-22000a4a0339",
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "gem_D",
                "resource_id": "b80e5ff6-a2c9-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "b8f96ecc-9eed-11e3-808c-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "b9f3d114-9eed-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "tractor.json",
                    "hash": "a9bbfd73348429190b4fb6352f79d5df",
                    "size": 156054,
                    "url": "assets/playcanvas/swooop/b8/b8f96ecc-9eed-11e3-808c-22000a4a0339/tractor.json"
                },
                "has_thumbnail": false,
                "name": "tractor",
                "resource_id": "b8f96ecc-9eed-11e3-808c-22000a4a0339",
                "type": "model"
            },
            "b92d3218-a2c9-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "gem_E",
                    "parameters": [
                        {
                            "data": [
                                0.47058823704719543,
                                0.3764705955982208,
                                0
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.5254902243614197,
                                0.3686274588108063,
                                0.003921568859368563
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0.4941176474094391,
                                0.3764705955982208,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": "062db338-a15f-11e3-81e9-22000a4a0339",
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "gem_E",
                "resource_id": "b92d3218-a2c9-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "b9332056-a2c9-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "gem_F",
                    "parameters": [
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "c5ca3f20-a2c9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0.25882354378700256,
                                0.05098039284348488
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": "062db338-a15f-11e3-81e9-22000a4a0339",
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "gem_F",
                "resource_id": "b9332056-a2c9-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "b9f3d114-9eed-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "tractor",
                    "parameters": [
                        {
                            "data": [
                                0.21176470816135406,
                                0.21176470816135406,
                                0.21176470816135406
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.21176470816135406,
                                0.21176470816135406,
                                0.21176470816135406
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "cf15f0fc-9ef9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "tractor",
                "resource_id": "b9f3d114-9eed-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "bc7438f0-9ef9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "lime"
                },
                "file": {
                    "filename": "lime.jpg",
                    "hash": "949ebca72ff1fe3302e4ee859b094ed7",
                    "size": 10962,
                    "url": "assets/playcanvas/swooop/bc/bc7438f0-9ef9-11e3-81e9-22000a4a0339/lime.jpg"
                },
                "has_thumbnail": true,
                "name": "lime",
                "resource_id": "bc7438f0-9ef9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "bde54d14-9ef9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "river_01"
                },
                "file": {
                    "filename": "river_01.jpg",
                    "hash": "a458847bc6d0cedb114653ba7f5e3a6c",
                    "size": 24805,
                    "url": "assets/playcanvas/swooop/bd/bde54d14-9ef9-11e3-81e9-22000a4a0339/river_01.jpg"
                },
                "has_thumbnail": true,
                "name": "river_01",
                "resource_id": "bde54d14-9ef9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "bf2fca82-a309-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "Rocks"
                },
                "file": {
                    "filename": "Rocks.jpg",
                    "hash": "b2f1583b38b640bbf8c470d426b21f6d",
                    "size": 30163,
                    "url": "assets/playcanvas/swooop/bf/bf2fca82-a309-11e3-81e9-22000a4a0339/Rocks.jpg"
                },
                "has_thumbnail": true,
                "name": "Rocks",
                "resource_id": "bf2fca82-a309-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "bfe41540-a2c9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "gem_E"
                },
                "file": {
                    "filename": "gem_E.jpg",
                    "hash": "4cb6dabb0536cb961e31ffb82144a40e",
                    "size": 8955,
                    "url": "assets/playcanvas/swooop/bf/bfe41540-a2c9-11e3-81e9-22000a4a0339/gem_E.jpg"
                },
                "has_thumbnail": true,
                "name": "gem_E",
                "resource_id": "bfe41540-a2c9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "c0c98ee0-a521-11e3-bd44-22000a4a0339": {
                "data": {
                    "name": "bulrushes",
                    "parameters": [
                        {
                            "data": [
                                0.22745098173618317,
                                0.46666666865348816,
                                0.21176470816135406
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.22745098173618317,
                                0.46666666865348816,
                                0.21176470816135406
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "c73831dc-a521-11e3-bd44-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "bulrushes",
                "resource_id": "c0c98ee0-a521-11e3-bd44-22000a4a0339",
                "type": "material"
            },
            "c20b4edc-9fb4-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "henge"
                },
                "file": {
                    "filename": "henge.jpg",
                    "hash": "7bdeaf9bbc90a6dbe241c029317f8571",
                    "size": 79472,
                    "url": "assets/playcanvas/swooop/c2/c20b4edc-9fb4-11e3-81e9-22000a4a0339/henge.jpg"
                },
                "has_thumbnail": true,
                "name": "henge",
                "resource_id": "c20b4edc-9fb4-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "c2a283d0-93ff-11e3-b647-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "b9332056-a2c9-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "gem_F.json",
                    "hash": "f1991734b8dc7f479b9cf33932724ad0",
                    "size": 7805,
                    "url": "assets/playcanvas/swooop/c2/c2a283d0-93ff-11e3-b647-22000a219e93/gem_F.json"
                },
                "has_thumbnail": false,
                "name": "gem_F",
                "resource_id": "c2a283d0-93ff-11e3-b647-22000a219e93",
                "type": "model"
            },
            "c2ce913c-93ff-11e3-a569-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "b92d3218-a2c9-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "gem_E.json",
                    "hash": "25c53fc1f2243580f6432b2df35fca40",
                    "size": 11377,
                    "url": "assets/playcanvas/swooop/c2/c2ce913c-93ff-11e3-a569-22000a219e93/gem_E.json"
                },
                "has_thumbnail": false,
                "name": "gem_E",
                "resource_id": "c2ce913c-93ff-11e3-a569-22000a219e93",
                "type": "model"
            },
            "c3661804-93ff-11e3-86d4-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "b7e64f48-a2c9-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "gem_C.json",
                    "hash": "0da9b57c517fe92542bdc91ba933ba7b",
                    "size": 12823,
                    "url": "assets/playcanvas/swooop/c3/c3661804-93ff-11e3-86d4-22000a219e93/gem_C.json"
                },
                "has_thumbnail": false,
                "name": "gem_C",
                "resource_id": "c3661804-93ff-11e3-86d4-22000a219e93",
                "type": "model"
            },
            "c49cd7d4-a832-11e3-80f1-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sprite_logo"
                },
                "file": {
                    "filename": "sprite_logo.png",
                    "hash": "da4e92a4df662a115f13217ec7a381f1",
                    "size": 17744,
                    "url": "assets/playcanvas/swooop/c4/c49cd7d4-a832-11e3-80f1-22000a4a0339/sprite_logo.png"
                },
                "has_thumbnail": true,
                "name": "sprite_logo",
                "resource_id": "c49cd7d4-a832-11e3-80f1-22000a4a0339",
                "type": "texture"
            },
            "c5216694-93ff-11e3-9e98-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "b80e5ff6-a2c9-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "gem_D.json",
                    "hash": "bf285abf5bf8a383945e352e1ef6db89",
                    "size": 7785,
                    "url": "assets/playcanvas/swooop/c5/c5216694-93ff-11e3-9e98-22000a219e93/gem_D.json"
                },
                "has_thumbnail": false,
                "name": "gem_D",
                "resource_id": "c5216694-93ff-11e3-9e98-22000a219e93",
                "type": "model"
            },
            "c5ca3f20-a2c9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "gem_F"
                },
                "file": {
                    "filename": "gem_F.jpg",
                    "hash": "4fa774abfc2f20502dd18eab9db6dd2d",
                    "size": 8829,
                    "url": "assets/playcanvas/swooop/c5/c5ca3f20-a2c9-11e3-81e9-22000a4a0339/gem_F.jpg"
                },
                "has_thumbnail": true,
                "name": "gem_F",
                "resource_id": "c5ca3f20-a2c9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "c73831dc-a521-11e3-bd44-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "bulrushes"
                },
                "file": {
                    "filename": "bulrushes.jpg",
                    "hash": "794629e2c1d302987e87de6c4d4e4ee8",
                    "size": 13989,
                    "url": "assets/playcanvas/swooop/c7/c73831dc-a521-11e3-bd44-22000a4a0339/bulrushes.jpg"
                },
                "has_thumbnail": true,
                "name": "bulrushes",
                "resource_id": "c73831dc-a521-11e3-bd44-22000a4a0339",
                "type": "texture"
            },
            "c88a0162-9f15-11e3-b7f1-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "c8fa393c-9f15-11e3-81e9-22000a4a0339"
                        },
                        {
                            "material": "c8fa393c-9f15-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "biplane.json",
                    "hash": "9141fedf93122d4f8d4b3cfd4d2ffc3f",
                    "size": 284818,
                    "url": "assets/playcanvas/swooop/c8/c88a0162-9f15-11e3-b7f1-22000a4a0339/biplane.json"
                },
                "has_thumbnail": false,
                "name": "biplane",
                "resource_id": "c88a0162-9f15-11e3-b7f1-22000a4a0339",
                "type": "model"
            },
            "c89293a4-9f15-11e3-b7f1-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "biplane_animation.json",
                    "hash": "6a27d40383e2d3c99082ac007c5cb74f",
                    "size": 693,
                    "url": "assets/playcanvas/swooop/c8/c89293a4-9f15-11e3-b7f1-22000a4a0339/biplane_animation.json"
                },
                "has_thumbnail": false,
                "name": "biplane",
                "resource_id": "c89293a4-9f15-11e3-b7f1-22000a4a0339",
                "type": "animation"
            },
            "c8fa393c-9f15-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "biplane",
                    "parameters": [
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.5843137502670288,
                                0.5843137502670288,
                                0.5843137502670288
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "d6fafbd4-9f15-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "biplane",
                "resource_id": "c8fa393c-9f15-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "c90dbf6e-9954-11e3-9042-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "c9e23014-9954-11e3-86ac-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "henge.json",
                    "hash": "bbf18c0c51ef8b8c5bb7c6b2da90b841",
                    "size": 659662,
                    "url": "assets/playcanvas/swooop/c9/c90dbf6e-9954-11e3-9042-22000a219e93/henge.json"
                },
                "has_thumbnail": false,
                "name": "henge",
                "resource_id": "c90dbf6e-9954-11e3-9042-22000a219e93",
                "type": "model"
            },
            "c977fb04-9ef9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "sheep"
                },
                "file": {
                    "filename": "sheep.jpg",
                    "hash": "5c83f7e6015367f6846b3db508a9e9fa",
                    "size": 8813,
                    "url": "assets/playcanvas/swooop/c9/c977fb04-9ef9-11e3-81e9-22000a4a0339/sheep.jpg"
                },
                "has_thumbnail": true,
                "name": "sheep",
                "resource_id": "c977fb04-9ef9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "c9e23014-9954-11e3-86ac-22000a219e93": {
                "data": {
                    "name": "henge",
                    "parameters": [
                        {
                            "data": [
                                0.5568627715110779,
                                0.5215686559677124,
                                0.4745098054409027
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.5568627715110779,
                                0.5215686559677124,
                                0.4745098054409027
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "c20b4edc-9fb4-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1.07,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "henge",
                "resource_id": "c9e23014-9954-11e3-86ac-22000a219e93",
                "type": "material"
            },
            "caac918c-a2fb-11e3-a9b5-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "cb3165b0-a2fb-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "Hills.json",
                    "hash": "829c9fb8812fd01da9a18ea7ff89fa46",
                    "size": 1551502,
                    "url": "assets/playcanvas/swooop/ca/caac918c-a2fb-11e3-a9b5-22000a4a0339/Hills.json"
                },
                "has_thumbnail": false,
                "name": "Hills",
                "resource_id": "caac918c-a2fb-11e3-a9b5-22000a4a0339",
                "type": "model"
            },
            "cb201be0-8f2b-11e3-a19d-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "05647dbc-9f0f-11e3-81e9-22000a4a0339"
                        },
                        {
                            "material": "05647dbc-9f0f-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "Windmill.json",
                    "hash": "27cf1cd7538f5aa05b28bd79e502d1fa",
                    "size": 465044,
                    "url": "assets/playcanvas/swooop/cb/cb201be0-8f2b-11e3-a19d-22000a219e93/Windmill.json"
                },
                "has_thumbnail": false,
                "name": "Windmill",
                "resource_id": "cb201be0-8f2b-11e3-a19d-22000a219e93",
                "type": "model"
            },
            "cb3165b0-a2fb-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "hills",
                    "parameters": [
                        {
                            "data": [
                                0.3137255012989044,
                                0.48627451062202454,
                                0.24705882370471954
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.3137255012989044,
                                0.48627451062202454,
                                0.24705882370471954
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "d0fe5322-a2fb-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "hills",
                "resource_id": "cb3165b0-a2fb-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "cb3553e8-8f2b-11e3-a19d-22000a219e93": {
                "data": null,
                "file": {
                    "filename": "Windmill_animation.json",
                    "hash": "2a235755abf565830d7973c59bc65108",
                    "size": 1001,
                    "url": "assets/playcanvas/swooop/cb/cb3553e8-8f2b-11e3-a19d-22000a219e93/Windmill_animation.json"
                },
                "has_thumbnail": false,
                "name": "Windmill",
                "resource_id": "cb3553e8-8f2b-11e3-a19d-22000a219e93",
                "type": "animation"
            },
            "cdea7dce-9ef9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "Windmill"
                },
                "file": {
                    "filename": "Windmill.jpg",
                    "hash": "be5657b249b45673c6504e79ad08ff2e",
                    "size": 26270,
                    "url": "assets/playcanvas/swooop/cd/cdea7dce-9ef9-11e3-81e9-22000a4a0339/Windmill.jpg"
                },
                "has_thumbnail": true,
                "name": "Windmill",
                "resource_id": "cdea7dce-9ef9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "cdf6950e-9e14-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "proxima_blackit_46.json",
                    "hash": "4c4630e2d242749de14db3ed041f5eb8",
                    "size": 14322,
                    "url": "assets/playcanvas/swooop/cd/cdf6950e-9e14-11e3-81e9-22000a4a0339/proxima_blackit_46.json"
                },
                "has_thumbnail": false,
                "name": "proxima_blackit_46",
                "resource_id": "cdf6950e-9e14-11e3-81e9-22000a4a0339",
                "type": "json"
            },
            "ce3eb668-a2c9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "gem_D"
                },
                "file": {
                    "filename": "gem_D.jpg",
                    "hash": "a70a26f9883ff4dd0acf4e69b8a0fac9",
                    "size": 8817,
                    "url": "assets/playcanvas/swooop/ce/ce3eb668-a2c9-11e3-81e9-22000a4a0339/gem_D.jpg"
                },
                "has_thumbnail": true,
                "name": "gem_D",
                "resource_id": "ce3eb668-a2c9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "cecf38f0-9e14-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "proxima_blackit_46"
                },
                "file": {
                    "filename": "proxima_blackit_46.png",
                    "hash": "6105de1adf6a5e5440aac35aedc70bf3",
                    "size": 28601,
                    "url": "assets/playcanvas/swooop/ce/cecf38f0-9e14-11e3-81e9-22000a4a0339/proxima_blackit_46.png"
                },
                "has_thumbnail": true,
                "name": "proxima_blackit_46",
                "resource_id": "cecf38f0-9e14-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "ced314fc-a2c9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "gem_C"
                },
                "file": {
                    "filename": "gem_C.jpg",
                    "hash": "17e1fd0a3834d80fdd816b9054f43a11",
                    "size": 8862,
                    "url": "assets/playcanvas/swooop/ce/ced314fc-a2c9-11e3-81e9-22000a4a0339/gem_C.jpg"
                },
                "has_thumbnail": true,
                "name": "gem_C",
                "resource_id": "ced314fc-a2c9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "cf15f0fc-9ef9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "tractor"
                },
                "file": {
                    "filename": "tractor.jpg",
                    "hash": "8532b0615eff76f447ffde07be7434ae",
                    "size": 43002,
                    "url": "assets/playcanvas/swooop/cf/cf15f0fc-9ef9-11e3-81e9-22000a4a0339/tractor.jpg"
                },
                "has_thumbnail": true,
                "name": "tractor",
                "resource_id": "cf15f0fc-9ef9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "d0fe5322-a2fb-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "Hills_D_2"
                },
                "file": {
                    "filename": "Hills_D_2.jpg",
                    "hash": "4238b1ec905be78b8699989959019fa7",
                    "size": 184132,
                    "url": "assets/playcanvas/swooop/d0/d0fe5322-a2fb-11e3-81e9-22000a4a0339/Hills_D_2.jpg"
                },
                "has_thumbnail": true,
                "name": "Hills_D_2",
                "resource_id": "d0fe5322-a2fb-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "d1c85528-9fea-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "towers"
                },
                "file": {
                    "filename": "towers.jpg",
                    "hash": "ecfeb040bcbab2585c2f233ce4bf4c7a",
                    "size": 104862,
                    "url": "assets/playcanvas/swooop/d1/d1c85528-9fea-11e3-81e9-22000a4a0339/towers.jpg"
                },
                "has_thumbnail": true,
                "name": "towers",
                "resource_id": "d1c85528-9fea-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "d5444496-9f27-11e3-a7aa-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "f855b0fe-9f1e-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "castle_walls2.json",
                    "hash": "b10626573b074482ce7e7b769fd40c28",
                    "size": 100741,
                    "url": "assets/playcanvas/swooop/d5/d5444496-9f27-11e3-a7aa-22000a4a0339/castle_walls2.json"
                },
                "has_thumbnail": false,
                "name": "castle_walls2",
                "resource_id": "d5444496-9f27-11e3-a7aa-22000a4a0339",
                "type": "model"
            },
            "d62c7742-a2f7-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "Mountain2"
                },
                "file": {
                    "filename": "Mountain2.jpg",
                    "hash": "b65e649528fda71d8acf0d3b6c94ee42",
                    "size": 226385,
                    "url": "assets/playcanvas/swooop/d6/d62c7742-a2f7-11e3-81e9-22000a4a0339/Mountain2.jpg"
                },
                "has_thumbnail": true,
                "name": "Mountain2",
                "resource_id": "d62c7742-a2f7-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "d65045a6-9f27-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "castle",
                    "parameters": [
                        {
                            "data": [
                                0.529412,
                                0.498039,
                                0.466667
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.529412,
                                0.498039,
                                0.466667
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "castle",
                "resource_id": "d65045a6-9f27-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "d6fafbd4-9f15-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "Biplane"
                },
                "file": {
                    "filename": "Biplane.jpg",
                    "hash": "cdc24264584c9615dfa0d39000408dcd",
                    "size": 80002,
                    "url": "assets/playcanvas/swooop/d6/d6fafbd4-9f15-11e3-81e9-22000a4a0339/Biplane.jpg"
                },
                "has_thumbnail": true,
                "name": "Biplane",
                "resource_id": "d6fafbd4-9f15-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "d711a4fa-9fa7-11e3-be19-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "d852e342-9fa7-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "bridge_2.json",
                    "hash": "1937635e4a657708a6e38dddc075f216",
                    "size": 369278,
                    "url": "assets/playcanvas/swooop/d7/d711a4fa-9fa7-11e3-be19-22000a4a0339/bridge_2.json"
                },
                "has_thumbnail": false,
                "name": "bridge_2",
                "resource_id": "d711a4fa-9fa7-11e3-be19-22000a4a0339",
                "type": "model"
            },
            "d759c46e-9ef9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "bonus_BG"
                },
                "file": {
                    "filename": "bonus_BG.jpg",
                    "hash": "4279bf862db9bcddf8e352f015102cc6",
                    "size": 21557,
                    "url": "assets/playcanvas/swooop/d7/d759c46e-9ef9-11e3-81e9-22000a4a0339/bonus_BG.jpg"
                },
                "has_thumbnail": true,
                "name": "bonus_BG",
                "resource_id": "d759c46e-9ef9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "d76cf9a0-9597-11e3-96bb-22000a219e93": {
                "data": {
                    "name": "castle_towers",
                    "parameters": [
                        {
                            "data": [
                                0.364705890417099,
                                0.364705890417099,
                                0.364705890417099
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.6549019813537598,
                                0.6078431606292725,
                                0.545098066329956
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "6129aa82-9f1e-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "castle_towers",
                "resource_id": "d76cf9a0-9597-11e3-96bb-22000a219e93",
                "type": "material"
            },
            "d7843704-a399-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "megagem_6.mp3",
                    "hash": "17dcc4be6d5d46ea63626756a50804c7",
                    "size": 83590,
                    "url": "assets/playcanvas/swooop/d7/d7843704-a399-11e3-81e9-22000a4a0339/megagem_6.mp3"
                },
                "has_thumbnail": false,
                "name": "megagem_6",
                "resource_id": "d7843704-a399-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "d7de77aa-a399-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "megagem_5.mp3",
                    "hash": "b0690ebcef7a6245b5d3c36c8074cba2",
                    "size": 81083,
                    "url": "assets/playcanvas/swooop/d7/d7de77aa-a399-11e3-81e9-22000a4a0339/megagem_5.mp3"
                },
                "has_thumbnail": false,
                "name": "megagem_5",
                "resource_id": "d7de77aa-a399-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "d809f16e-9fbb-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "pine_trees"
                },
                "file": {
                    "filename": "pine_trees.jpg",
                    "hash": "1bd1b16dac84de4afe322ae2cff58663",
                    "size": 11819,
                    "url": "assets/playcanvas/swooop/d8/d809f16e-9fbb-11e3-81e9-22000a4a0339/pine_trees.jpg"
                },
                "has_thumbnail": true,
                "name": "pine_trees",
                "resource_id": "d809f16e-9fbb-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "d852e342-9fa7-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "bridge_2",
                    "parameters": [
                        {
                            "data": [
                                0.1764705926179886,
                                0.16862745583057404,
                                0.20000000298023224
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.1764705926179886,
                                0.16862745583057404,
                                0.20000000298023224
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "dcac8e2a-9fa7-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1.07,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "bridge_2",
                "resource_id": "d852e342-9fa7-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "d89874f0-9f27-11e3-9885-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "d986ab2a-9f27-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "castle_walls2.json",
                    "hash": "448a5d925873d4f51e1cbb2cd087a3ae",
                    "size": 100741,
                    "url": "assets/playcanvas/swooop/d8/d89874f0-9f27-11e3-9885-22000a4a0339/castle_walls2.json"
                },
                "has_thumbnail": false,
                "name": "castle_walls2",
                "resource_id": "d89874f0-9f27-11e3-9885-22000a4a0339",
                "type": "model"
            },
            "d9a51008-a399-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "megagem_3.mp3",
                    "hash": "9557dde3a3bbed261f4c208e5d657e53",
                    "size": 63528,
                    "url": "assets/playcanvas/swooop/d9/d9a51008-a399-11e3-81e9-22000a4a0339/megagem_3.mp3"
                },
                "has_thumbnail": false,
                "name": "megagem_3",
                "resource_id": "d9a51008-a399-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "da6592b0-a399-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "megagem_2.mp3",
                    "hash": "bc48da7350f3cb2ff07ba61c461e2d8a",
                    "size": 64364,
                    "url": "assets/playcanvas/swooop/da/da6592b0-a399-11e3-81e9-22000a4a0339/megagem_2.mp3"
                },
                "has_thumbnail": false,
                "name": "megagem_2",
                "resource_id": "da6592b0-a399-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "da9b7512-a2cf-11e3-8808-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "db03c9b4-a2cf-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "spanner.json",
                    "hash": "609d790f3fb8f6353db54b822290c4c0",
                    "size": 23388,
                    "url": "assets/playcanvas/swooop/da/da9b7512-a2cf-11e3-8808-22000a4a0339/spanner.json"
                },
                "has_thumbnail": false,
                "name": "spanner",
                "resource_id": "da9b7512-a2cf-11e3-8808-22000a4a0339",
                "type": "model"
            },
            "db03c9b4-a2cf-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "spanner",
                    "parameters": [
                        {
                            "data": [
                                0.729411780834198,
                                0.4588235318660736,
                                0
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.3921568691730499,
                                0.27450981736183167,
                                0
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0.3921568691730499,
                                0.27450981736183167,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": "062db338-a15f-11e3-81e9-22000a4a0339",
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "spanner",
                "resource_id": "db03c9b4-a2cf-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "db437dd2-a399-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "megagem_4.mp3",
                    "hash": "4795724fa91216feaf858ebf9746b6d6",
                    "size": 74395,
                    "url": "assets/playcanvas/swooop/db/db437dd2-a399-11e3-81e9-22000a4a0339/megagem_4.mp3"
                },
                "has_thumbnail": false,
                "name": "megagem_4",
                "resource_id": "db437dd2-a399-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "dbaffa8c-995f-11e3-aae0-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "c0c98ee0-a521-11e3-bd44-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "bulrushes.json",
                    "hash": "101a318d5024bb74e60b30cf50092d4d",
                    "size": 211458,
                    "url": "assets/playcanvas/swooop/db/dbaffa8c-995f-11e3-aae0-22000a219e93/bulrushes.json"
                },
                "has_thumbnail": false,
                "name": "bulrushes",
                "resource_id": "dbaffa8c-995f-11e3-aae0-22000a219e93",
                "type": "model"
            },
            "dbffdfe0-a399-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "megagem_1.mp3",
                    "hash": "5609de438ca07c9d4b1741a1d8896b77",
                    "size": 85262,
                    "url": "assets/playcanvas/swooop/db/dbffdfe0-a399-11e3-81e9-22000a4a0339/megagem_1.mp3"
                },
                "has_thumbnail": false,
                "name": "megagem_1",
                "resource_id": "dbffdfe0-a399-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "dc7713b4-a2f7-11e3-a432-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "dd097452-a2f7-11e3-81e9-22000a4a0339"
                        },
                        {
                            "material": "dd097452-a2f7-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "Mountain.json",
                    "hash": "27a93e1d990110050661cbdfcc99840b",
                    "size": 1034607,
                    "url": "assets/playcanvas/swooop/dc/dc7713b4-a2f7-11e3-a432-22000a4a0339/Mountain.json"
                },
                "has_thumbnail": false,
                "name": "Mountain",
                "resource_id": "dc7713b4-a2f7-11e3-a432-22000a4a0339",
                "type": "model"
            },
            "dcac8e2a-9fa7-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "bridge_2"
                },
                "file": {
                    "filename": "bridge_2.jpg",
                    "hash": "f541b9812e3cc83e4624af6efbaf2aaf",
                    "size": 35229,
                    "url": "assets/playcanvas/swooop/dc/dcac8e2a-9fa7-11e3-81e9-22000a4a0339/bridge_2.jpg"
                },
                "has_thumbnail": true,
                "name": "bridge_2",
                "resource_id": "dcac8e2a-9fa7-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "dd095242-a2f7-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "willow_trees",
                    "parameters": [
                        {
                            "data": [
                                0.32156863808631897,
                                0.32156863808631897,
                                0.32156863808631897
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.32156863808631897,
                                0.32156863808631897,
                                0.32156863808631897
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "7782713e-a314-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "willow_trees",
                "resource_id": "dd095242-a2f7-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "dd097452-a2f7-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "Mountian",
                    "parameters": [
                        {
                            "data": [
                                0.95686274766922,
                                0.95686274766922,
                                0.95686274766922
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.95686274766922,
                                0.95686274766922,
                                0.95686274766922
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "d62c7742-a2f7-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "Mountian",
                "resource_id": "dd097452-a2f7-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "dfa6b48c-a08f-11e3-a73c-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "aa3ea15e-a096-11e3-b36b-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "fir_bush.json",
                    "hash": "5ff8c89c48cb70eedca79e35de79fc95",
                    "size": 14427,
                    "url": "assets/playcanvas/swooop/df/dfa6b48c-a08f-11e3-a73c-22000a4a0339/fir_bush.json"
                },
                "has_thumbnail": false,
                "name": "fir_bush",
                "resource_id": "dfa6b48c-a08f-11e3-a73c-22000a4a0339",
                "type": "model"
            },
            "e1c75aec-94b3-11e3-896b-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "db03c9b4-a2cf-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "Star_01.json",
                    "hash": "ee7210b02d802862bc5767adcdc0e19e",
                    "size": 4232,
                    "url": "assets/playcanvas/swooop/e1/e1c75aec-94b3-11e3-896b-22000a219e93/Star_01.json"
                },
                "has_thumbnail": false,
                "name": "Star_01",
                "resource_id": "e1c75aec-94b3-11e3-896b-22000a219e93",
                "type": "model"
            },
            "e4260182-a91f-11e3-80f1-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "music.mp3",
                    "hash": "70fad0d90a8966db5f6616fbfe3917d8",
                    "size": 1537252,
                    "url": "assets/playcanvas/swooop/e4/e4260182-a91f-11e3-80f1-22000a4a0339/music.mp3"
                },
                "has_thumbnail": false,
                "name": "music",
                "resource_id": "e4260182-a91f-11e3-80f1-22000a4a0339",
                "type": "audio"
            },
            "e60c71e6-9ef9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "pilot"
                },
                "file": {
                    "filename": "pilot.jpg",
                    "hash": "03d70d9dab33544446d3d2ac3caedcc5",
                    "size": 43177,
                    "url": "assets/playcanvas/swooop/e6/e60c71e6-9ef9-11e3-81e9-22000a4a0339/pilot.jpg"
                },
                "has_thumbnail": true,
                "name": "pilot",
                "resource_id": "e60c71e6-9ef9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "eb3d31ce-9fbb-11e3-988e-22000a4a0339": {
                "data": {
                    "name": "pine trees",
                    "parameters": [
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.6980392336845398,
                                0.6980392336845398,
                                0.6980392336845398
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "d809f16e-9fbb-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 25,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "pine trees",
                "resource_id": "eb3d31ce-9fbb-11e3-988e-22000a4a0339",
                "type": "material"
            },
            "ed441c44-ab5a-11e3-a9d2-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "aa3ea15e-a096-11e3-b36b-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "A_fir_bushes.json",
                    "hash": "092ee5da261890f37f3a507b1a41f106",
                    "size": 336528,
                    "url": "assets/playcanvas/swooop/ed/ed441c44-ab5a-11e3-a9d2-22000a4a0339/A_fir_bushes.json"
                },
                "has_thumbnail": false,
                "name": "A_fir_bushes",
                "resource_id": "ed441c44-ab5a-11e3-a9d2-22000a4a0339",
                "type": "model"
            },
            "ef157928-ab5a-11e3-a60f-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "aa3ea15e-a096-11e3-b36b-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "A_fir_trees_02.json",
                    "hash": "86b384ab2c292fbac65651f2750fb2e4",
                    "size": 758858,
                    "url": "assets/playcanvas/swooop/ef/ef157928-ab5a-11e3-a60f-22000a4a0339/A_fir_trees_02.json"
                },
                "has_thumbnail": false,
                "name": "A_fir_trees_02",
                "resource_id": "ef157928-ab5a-11e3-a60f-22000a4a0339",
                "type": "model"
            },
            "ef440c64-a3c3-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "cloud_hit.mp3",
                    "hash": "fad832e3e8215cafe9a1adb8fa91635c",
                    "size": 38451,
                    "url": "assets/playcanvas/swooop/ef/ef440c64-a3c3-11e3-81e9-22000a4a0339/cloud_hit.mp3"
                },
                "has_thumbnail": false,
                "name": "cloud_hit",
                "resource_id": "ef440c64-a3c3-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "ef83d3da-a3c3-11e3-81e9-22000a4a0339": {
                "data": null,
                "file": {
                    "filename": "ground_hit.mp3",
                    "hash": "75cf6ddfd66af57c8d40fdb942efcfb3",
                    "size": 53497,
                    "url": "assets/playcanvas/swooop/ef/ef83d3da-a3c3-11e3-81e9-22000a4a0339/ground_hit.mp3"
                },
                "has_thumbnail": false,
                "name": "ground_hit",
                "resource_id": "ef83d3da-a3c3-11e3-81e9-22000a4a0339",
                "type": "audio"
            },
            "f090ae80-ab5a-11e3-9a52-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "aa3ea15e-a096-11e3-b36b-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "A_fir_trees_01.json",
                    "hash": "ba53597dced8d88b8f07a93cabfc4031",
                    "size": 1459293,
                    "url": "assets/playcanvas/swooop/f0/f090ae80-ab5a-11e3-9a52-22000a4a0339/A_fir_trees_01.json"
                },
                "has_thumbnail": false,
                "name": "A_fir_trees_01",
                "resource_id": "f090ae80-ab5a-11e3-9a52-22000a4a0339",
                "type": "model"
            },
            "f0a32d94-ab5a-11e3-bd52-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "aa3ea15e-a096-11e3-b36b-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "A_fir_trees_03.json",
                    "hash": "9e9b83ca71b0e3c6b8c9b190a9174313",
                    "size": 1657211,
                    "url": "assets/playcanvas/swooop/f0/f0a32d94-ab5a-11e3-bd52-22000a4a0339/A_fir_trees_03.json"
                },
                "has_thumbnail": false,
                "name": "A_fir_trees_03",
                "resource_id": "f0a32d94-ab5a-11e3-bd52-22000a4a0339",
                "type": "model"
            },
            "f3743cc4-9ef9-11e3-81e9-22000a4a0339": {
                "data": {
                    "addressu": "repeat",
                    "addressv": "repeat",
                    "anisotropy": 1,
                    "magfilter": "linear",
                    "minfilter": "linear_mip_linear",
                    "name": "river_01_NRM2"
                },
                "file": {
                    "filename": "river_01_NRM2.jpg",
                    "hash": "6e2aa38e51580d30f89a91223efffc06",
                    "size": 26482,
                    "url": "assets/playcanvas/swooop/f3/f3743cc4-9ef9-11e3-81e9-22000a4a0339/river_01_NRM2.jpg"
                },
                "has_thumbnail": true,
                "name": "river_01_NRM2",
                "resource_id": "f3743cc4-9ef9-11e3-81e9-22000a4a0339",
                "type": "texture"
            },
            "f41d0ecc-9255-11e3-a485-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "f50e0fde-9255-11e3-8d2a-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "River.json",
                    "hash": "a138dc575ad55eeca921d577762106eb",
                    "size": 633209,
                    "url": "assets/playcanvas/swooop/f4/f41d0ecc-9255-11e3-a485-22000a219e93/River.json"
                },
                "has_thumbnail": false,
                "name": "River",
                "resource_id": "f41d0ecc-9255-11e3-a485-22000a219e93",
                "type": "model"
            },
            "f50e0fde-9255-11e3-8d2a-22000a219e93": {
                "data": {
                    "name": "river",
                    "parameters": [
                        {
                            "data": [
                                0.529411792755127,
                                0.7686274647712708,
                                0.9215686321258545
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.529411792755127,
                                0.7686274647712708,
                                0.9215686321258545
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "bde54d14-9ef9-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                2,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0.24313725531101227,
                                0.2549019753932953,
                                0.2549019753932953
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 3.08,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": "f3743cc4-9ef9-11e3-81e9-22000a4a0339",
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                2,
                                2
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "river",
                "resource_id": "f50e0fde-9255-11e3-8d2a-22000a219e93",
                "type": "material"
            },
            "f7e703e8-9f1e-11e3-9511-22000a4a0339": {
                "data": {
                    "mapping": [
                        {
                            "material": "f855b0fe-9f1e-11e3-81e9-22000a4a0339"
                        }
                    ]
                },
                "file": {
                    "filename": "castle_walls.json",
                    "hash": "0dabb8aea86bc4697e36fadcfc2ccbb5",
                    "size": 539391,
                    "url": "assets/playcanvas/swooop/f7/f7e703e8-9f1e-11e3-9511-22000a4a0339/castle_walls.json"
                },
                "has_thumbnail": false,
                "name": "castle_walls",
                "resource_id": "f7e703e8-9f1e-11e3-9511-22000a4a0339",
                "type": "model"
            },
            "f855b0fe-9f1e-11e3-81e9-22000a4a0339": {
                "data": {
                    "name": "castle walls",
                    "parameters": [
                        {
                            "data": [
                                0.529411792755127,
                                0.4941176474094391,
                                0.46666666865348816
                            ],
                            "name": "ambient",
                            "type": "vec3"
                        },
                        {
                            "data": [
                                0.529411792755127,
                                0.4941176474094391,
                                0.46666666865348816
                            ],
                            "name": "diffuse",
                            "type": "vec3"
                        },
                        {
                            "data": "8a1b7974-9f1f-11e3-81e9-22000a4a0339",
                            "name": "diffuseMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "diffuseMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "diffuseMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "specular",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "specularMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "specularMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "specularMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 2,
                            "name": "shininess",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "glossMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "glossMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "glossMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0,
                                0
                            ],
                            "name": "emissive",
                            "type": "vec3"
                        },
                        {
                            "data": null,
                            "name": "emissiveMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "emissiveMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "emissiveMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "opacity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "opacityMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "opacityMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "opacityMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "bumpMapFactor",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "normalMap",
                            "type": "texture"
                        },
                        {
                            "data": [
                                1,
                                1
                            ],
                            "name": "normalMapTiling",
                            "type": "vec2"
                        },
                        {
                            "data": [
                                0,
                                0
                            ],
                            "name": "normalMapOffset",
                            "type": "vec2"
                        },
                        {
                            "data": 1,
                            "name": "reflectivity",
                            "type": "float"
                        },
                        {
                            "data": null,
                            "name": "sphereMap",
                            "type": "texture"
                        },
                        {
                            "data": null,
                            "name": "lightMap",
                            "type": "texture"
                        },
                        {
                            "data": true,
                            "name": "depthTest",
                            "type": "boolean"
                        },
                        {
                            "data": true,
                            "name": "depthWrite",
                            "type": "boolean"
                        },
                        {
                            "data": 1,
                            "name": "cull",
                            "type": "float"
                        },
                        {
                            "data": 2,
                            "name": "blendType",
                            "type": "float"
                        }
                    ],
                    "shader": "phong"
                },
                "file": null,
                "has_thumbnail": false,
                "name": "castle walls",
                "resource_id": "f855b0fe-9f1e-11e3-81e9-22000a4a0339",
                "type": "material"
            },
            "fa5dcf1a-94c1-11e3-8d85-22000a219e93": {
                "data": {
                    "mapping": [
                        {
                            "material": "d76cf9a0-9597-11e3-96bb-22000a219e93"
                        }
                    ]
                },
                "file": {
                    "filename": "castle.json",
                    "hash": "8ae2aa39267d72115c9875206219fb9b",
                    "size": 1185169,
                    "url": "assets/playcanvas/swooop/fa/fa5dcf1a-94c1-11e3-8d85-22000a219e93/castle.json"
                },
                "has_thumbnail": false,
                "name": "castle",
                "resource_id": "fa5dcf1a-94c1-11e3-8d85-22000a219e93",
                "type": "model"
            }
        },
        "packs": [
            "5ae86c85-1457-4505-8d2c-d3b712712a21"
        ]
    }
}
};
pc.content = new pc.fw.ContentFile(content);