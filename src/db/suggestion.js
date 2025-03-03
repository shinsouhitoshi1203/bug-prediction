const keywords = (issueType) => {
	return {
		check: {
			reg: /(thăm|kiểm tra)/gi,
			resolveName: "Thăm đồng thường xuyên"
		},
		// clean: /vệ sinh/gi,
		// fertilize: /bón/gi,
		// predators: /thiên địch/gi,
		// pesticides_when: /.*(khi|lúc|thời gian|khi).*(phun|xịt)*thuốc.*/gi,
		// pesticides: /.*(phun|xịt)*thuốc.*/gi,
		// trap: /bẫy/gi,
		// seed: /giống/gi,
		// method: /biện pháp/gi
		clean: { reg: /vệ sinh/gi, resolveName: "Vệ sinh đồng ruộng" },
		fertilize: { reg: /bón/gi, resolveName: "Bón phân cân đối" },
		predators: {
			reg: /thiên địch/gi,
			resolveName: "Bảo vệ các loài thiên địch"
		},
		pesticides_when: {
			reg: /.*(khi|lúc|thời gian|khi).*(phun|xịt)*thuốc.*/gi,
			resolveName: "Phun thuốc vào thời gian thích hợp"
		},
		pesticides: {
			reg: /.*(phun|xịt)*thuốc.*/gi,
			resolveName: "Phun thuốc đúng cách"
		},
		trap: { reg: /bẫy/gi, resolveName: "Sử dụng bẫy bắt" },
		seed: { reg: /giống/gi, resolveName: "Chọn giống chống chịu" },
		method: {
			reg: /biện pháp/gi,
			resolveName: "Áp dụng các biện pháp canh tác"
		},
		chemical: {
			reg: /hoạt chất/gi,
			resolveName: "Sử dụng các loại hoạt chất"
		}
	};
};
//  hoạt chất
function match(input, keyword) {
	return input.match(keyword);
}
function summarise(input) {
	input = input.toLowerCase();
	let resolve = "";
	let providedList = keywords();
	const keys = Object.keys(providedList);
	keys.forEach((key) => {
		if (match(input, providedList[key].reg)) {
			resolve = resolve == "" ? providedList[key].resolveName : resolve;
		}
	});

	if (resolve == "") return input;
	else return resolve;
}
let res = summarise("Bón phân cân đối NPK, không bón thừa đạm.");
console.log(res);
export default summarise;
