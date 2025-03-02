const formatJSON = {
	type: "object",
	properties: {
		pest_list: {
			type: "array",
			items: {
				type: "object",
				properties: {
					issue_name: {
						type: "string"
					},
					type: {
						type: "string"
					}
				},
				required: ["issue_name", "type"]
			}
		},
		detailed_list: {
			type: "array",
			items: {
				type: "object",
				properties: {
					issue_name: {
						type: "string"
					},
					type: {
						type: "string"
					},
					issue_description: {
						type: "string"
					},
					suggestions: {
						type: "array",
						items: {
							type: "string"
						}
					}
				},
				required: [
					"issue_name",
					"type",
					"issue_description",
					"suggestions"
				]
			}
		}
	},
	required: ["pest_list", "detailed_list"]
};
export default formatJSON;
