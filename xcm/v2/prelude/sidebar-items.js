initSidebarItems({"enum":[["AssetId","Classification of an asset being concrete or abstract."],["AssetInstance","A general identifier for an instance of a non-fungible asset class."],["BodyId","An identifier of a pluralistic body."],["BodyPart","A part of a pluralistic body."],["Fungibility","Classification of whether an asset is fungible or not, along with a mandatory amount or instance."],["Junction","A single item in a path to describe the relative location of a consensus system."],["Junctions","Non-parent junctions that can be constructed, up to the length of 8. This specific `Junctions` implementation uses a Rust `enum` in order to make pattern matching easier."],["MultiAssetFilter","`MultiAsset` collection, either `MultiAssets` or a single wildcard."],["NetworkId","A global identifier of an account-bearing consensus system."],["Outcome","Outcome of an XCM execution."],["SendError","Error result value when attempting to send an XCM message."],["WildFungibility","Classification of whether an asset is fungible or not."],["WildMultiAsset","A wildcard representing a set of assets."],["XcmError",""]],"mod":[["opaque",""]],"struct":[["Ancestor","A unit struct which can be converted into a `MultiLocation` of the inner `parents` value."],["AncestorThen","A unit struct which can be converted into a `MultiLocation` of the inner `parents` value and the inner interior."],["MultiAsset",""],["MultiAssets","A `Vec` of `MultiAsset`s. There may be no duplicate fungible items in here and when decoding, they must be sorted."],["MultiLocation","A relative path between state-bearing consensus systems."],["Parent","A unit struct which can be converted into a `MultiLocation` of `parents` value 1."],["ParentThen","A tuple struct which can be converted into a `MultiLocation` of `parents` value 1 with the inner interior."]],"trait":[["ExecuteXcm","Type of XCM message executor."],["SendXcm","Utility for sending an XCM message."],["XcmWeightInfo","The info needed to weight an XCM."]],"type":[["InteriorMultiLocation","A relative location which is constrained to be an interior location of the context."],["SendResult","Result value when attempting to send an XCM message."],["XcmResult",""]]});