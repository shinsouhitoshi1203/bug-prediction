import { GoogleGenerativeAI } from "@google/generative-ai";
import formatJSON from "./format";

const apiKey = import.meta.env.VITE_GEMINI_API;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
	model: "gemini-2.0-pro-exp-02-05",
	systemInstruction:
		"All of the data must be in Vietnamese. Description: \n - Description includes: Occur time, and detail issue's affects on the plants SPECIFICALLY. \n - Combine the conditions of provided crop's season (Đông Xuân, Hè Thu, Mùa, Thu Đông), rice's stage and weather's season altogether. \n - Don't add any numerous data into the description such as date, year, temperatures and humidity. \n - Issues are pests and disease for rice plant in Mekong Delta. \n - Issue type's must be 'pest' or 'disease'. \n -  Only list issues with greatest affect. \n Suggestions: \n -  DON'T SUGGEST TOO GENERALLY, suggestions should be specific, practical, well-detailed and as much as possible. \n - Recommend adding some instructions (only tell the name) for spraying pesticides based on recommendations (Nguyên tắc 4 đúng, 3 giảm 3 tăng, ...)"
});

const generationConfig = {
	temperature: 1,
	topP: 1,
	topK: 64,
	maxOutputTokens: 8192,
	responseMimeType: "application/json",
	responseSchema: formatJSON
};

async function run2() {
	const parts = [
		{ text: "Description includes: Occur time, and its affect." },
		{
			text: 'input: ```json\n{"city":"Trà Vinh","weather":{"description":["Sunny"],"img":"https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png","temperature":31,"humidity":53},"data":{"date":"2025-03-02","season":"Mùa khô","time":"day","riceSeason":"Đông Xuân","riceStage":"Đẻ nhánh","location":"Đồng bằng Sông Cửu Long"}}```'
		},
		{
			text: 'output: {"pest_list":[{"name":"rầy nâu","type":"pest"}],"list":[{"name":"rầy nâu","description":"Xuất hiện trong điều kiện thời tiết nắng nóng vào ban ngày và ẩm độ thấp. Rầy nâu chích hút nhựa cây lúa, làm cho cây lúa trở nên yếu và giảm năng suất. Nếu mật độ rầy nâu cao, chúng có thể gây ra hiện tượng \'cháy rầy\', làm cho toàn bộ ruộng lúa bị khô héo và chết.","suggestion":["Thăm đồng thường xuyên để phát hiện sớm sự xuất hiện của rầy nâu.","Sử dụng giống lúa chống chịu rầy nâu.","Bón phân cân đối, tránh bón thừa đạm.","Khi mật độ rầy cao, sử dụng thuốc bảo vệ thực vật đặc trị rầy nâu theo nguyên tắc 4 đúng."]}]}'
		},
		{
			text: 'input: ```json\n{"city":"Sóc Trăng","weather":{"description":["Sunny"],"img":"https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png","temperature":31,"humidity":51},"data":{"date":"2025-03-02","season":"Mùa khô","time":"day","location":"Đồng bằng sông Cửu Long","riceSeason":"Đông Xuân","riceStage":"Đẻ Gieo sạ"}}```'
		},
		{ text: "output: " }
	];

	const result = await model.generateContent({
		contents: [{ role: "user", parts }],
		generationConfig
	});
	console.log(result.response.text());
}
async function run(inputObject = "") {
	const parts = [
		// your input here
		{
			text: inputObject
		}
	];

	const result = await model.generateContent({
		contents: [{ role: "user", parts }],
		generationConfig
	});
	return result.response.text();
}
// run();
export default run;
// text: 'input: ```json\n{"city":"Long An","weather":{"description":["Sunny"],"img":"https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png","temperature":31,"humidity":53},"data":{"date":"2025-03-02","season":"Mùa khô","time":"day","riceSeason":"Đông Xuân","riceStage":"Đẻ nhánh","location":"Đồng bằng Sông Cửu Long"}}```'
