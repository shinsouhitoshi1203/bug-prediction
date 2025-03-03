import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
const useStore = create(
	subscribeWithSelector((set, get) => {
		return {
			disabledInput: false,
			status: {
				error: "",
				inDefault: true,
				isLoading: { weather: false, prediction: false }
			},
			hasPreviousData: false,
			savePrevious: true,
			previous: {
				province: ""
			},
			cache: {
				weather: {},
				prediction: {}
			},
			issues: []
		};
	})
);

export default useStore;

/// not doing now but will be used later
const issues = [
	{
		alias: "raynau",
		blob: "blob:localhost:3000/1b3b1b7b-4b3b-4b3b-4b3b-4b3b4b3b4b3b",
		json: '{"description":"Giai đoạn lúa đẻ nhánh vào mùa khô, thời tiết nắng nóng, ẩm độ không khí thấp, xảy ra vào ban ngày.","name":"Rầy nâu","type":"pest","suggestion":["Thăm đồng thường xuyên để kiểm tra mật độ rầy.","Sử dụng giống lúa kháng rầy.","Bảo vệ thiên địch.","Sử dụng bẫy đèn để dự báo rầy di trú.","Áp dụng biện pháp canh tác tổng hợp.","Khi mật độ rầy cao có thể sử dụng thuốc trừ sâu đặc trị theo hướng dẫn của chuyên gia và tuân thủ quy tắc \\"Nguyên tắc 4 đúng\\"."]}'
	},
	{
		alias: "benhdaonla",
		blob: "blob:localhost:3000/1b3b1b7b-4b3b-4b3b-4b3b-4b3b4b3b4b3b",
		json: '{"description":"Giai đoạn lúa đẻ nhánh vào mùa khô, thời tiết nắng nóng, ẩm độ không khí thấp, xảy ra vào ban ngày.","name":"Bệnh đạo ôn lá","type":"disease","suggestion":["Thăm đồng thường xuyên để kiểm tra vết bệnh.","Sử dụng giống lúa kháng bệnh.","Vệ sinh đồng ruộng, dọn sạch tàn dư.","Bón phân cân đối NPK, không bón thừa đạm.","Khi bệnh chớm xuất hiện, có thể sử dụng thuốc trừ bệnh theo hướng dẫn của chuyên gia và tuân thủ quy tắc \\"Nguyên tắc 4 đúng\\"."]}'
	}
];
/* sample
{
    description:
        "Giai đoạn lúa đẻ nhánh vào mùa khô, thời tiết nắng nóng, ẩm độ không khí thấp, xảy ra vào ban ngày.",
    name: "Rầy nâu",
    type: "pest",
    suggestion: [
        "Thăm đồng thường xuyên để kiểm tra mật độ rầy.",
        "Sử dụng giống lúa kháng rầy.",
        "Bảo vệ thiên địch.",
        "Sử dụng bẫy đèn để dự báo rầy di trú.",
        "Áp dụng biện pháp canh tác tổng hợp.",
        'Khi mật độ rầy cao có thể sử dụng thuốc trừ sâu đặc trị theo hướng dẫn của chuyên gia và tuân thủ quy tắc "Nguyên tắc 4 đúng".'
    ]
},
*/
