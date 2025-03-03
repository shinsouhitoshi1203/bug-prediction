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
			reg: /.*((?<!(với|cho|hại|đến) )thiên địch).*/gi,
			resolveName: "Bảo vệ các loài thiên địch"
		},

		pesticides: {
			reg: /nguyên tắc/gi,
			resolveName: "Phun thuốc đúng nguyên tắc"
		},
		pesticides_safe: {
			reg: /.*(khi|lúc|thời gian|khi).*(phun|xịt|sử dụng).*thuốc.*(thiên địch).*/gi,
			resolveName: "Phun tránh gây hại thiên địch"
		},
		pesticides_bio: {
			reg: /.*(có thể).*(phun|xịt|sử dụng)*(sinh).*/gi,
			resolveName: "Dùng các chế phẩm sinh học an toàn."
		},
		pesticides_when: {
			reg: /.*(khi|lúc|thời gian|khi).*(phun|xịt|sử dụng).*thuốc.*/gi,
			resolveName: "Phun thuốc vào thời gian thích hợp"
		},
		pesticides_last: {
			reg: /.*(khi|lúc|thời gian|khi).*(cao).*/gi,
			resolveName: "Phun thuốc vào thời gian thích hợp"
		},
		water: {
			reg: /.*(nước|khô |ngập).*/gi,
			resolveName: "Chỉnh mực nước trong ruộng"
		},
		trap: { reg: /bẫy/gi, resolveName: "Sử dụng bẫy bắt" },
		seed: { reg: /giống/gi, resolveName: "Chọn giống chống chịu" },
		method: {
			reg: /biện pháp/gi,
			resolveName: "Áp dụng các biện pháp canh tác"
		},
		planting_lc: {
			reg: /luân canh/gi,
			resolveName: "Luân canh với cây khác"
		},
		planting_xc: {
			reg: /xen canh/gi,
			resolveName: "Xen canh với cây khác"
		},
		chemical: {
			reg: /hoạt chất/gi,
			resolveName: "Sử dụng các loại hoạt chất"
		},
		animal: {
			reg: /(thả)/gi,
			resolveName: "Thả thiên địch vào ruộng"
		},
		cut: {
			reg: /(cắt|tỉa).*(lây lan)/gi,
			resolveName: "Cắt tỉa lá bị bệnh"
		},
		remove: {
			reg: /(bỏ|loại bỏ)/gi,
			resolveName: "Ngắt bỏ mảng cây bị sâu, rầy"
		}
	};
};
//  hoạt chất
function match(input, keyword) {
	return input.match(keyword) !== null;
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

export default summarise;
