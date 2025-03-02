const formatJSON = {
	type: "object",
	properties: {
		issue_list: {
			type: "array",
			items: {
				type: "object",
				properties: {
					issue_name: {
						type: "string"
					},
					issue_type: {
						type: "string"
					}
				},
				required: ["issue_name", "issue_type"]
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
					issue_type: {
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
					"issue_type",
					"issue_description",
					"suggestions"
				]
			}
		}
	},
	required: ["issue_list", "detailed_list"]
};
export default formatJSON;
