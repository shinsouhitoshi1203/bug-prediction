import { lazy } from "react";
const Image = lazy(() => import("../../components/SkeletonImg"));
function HelpPage() {
	return (
		<div className="container my-[48px] mx-auto max-w-[600px] grid gap-y-[24px]">
			<article className="">
				<p className="italic">by admin</p>
				<h1 className="text-3xl font-bold md:font-heading">
					Hướng dẫn sử dụng công cụ
				</h1>
				<p>
					Đây là trang hướng dẫn sử dụng công cụ. Hãy xem các hướng
					dẫn dưới đây để sử dụng công cụ một cách hiệu quả nhất.
				</p>
			</article>
			<section className="intro">
				<h2 className="font-subheading">1. Giới thiệu</h2>
				<p>
					Trang web này giúp bà con dự báo sâu bệnh có thể xảy ra
					trong ngày, đồng thời cung cấp các biện pháp quản lý các đối
					tượng trên.
				</p>
			</section>
			<section className="intro">
				<h2 className="font-subheading">2. Hướng dẫn đơn giản</h2>
				<Image src="./help/2-1.png" alt="Form người dùng" />
				<p>Bà con thực hiện các bước sau để sử dụng công cụ:</p>
				<div className="grid gap-y-3 my-4">
					<section>
						<h3 className="font-medium">
							Bước 1. Chọn tỉnh thành.
						</h3>
						<p>Chọn tỉnh thành nơi bạn muốn dự báo sâu bệnh.</p>
						<Image
							src="./help/2-2.png"
							alt="Chọn tỉnh thành (13 tỉnh ĐBSCL)"
						/>
					</section>
					<section>
						<h3 className="font-medium">
							Bước 2. Nhấn nút "Xem dự báo"
						</h3>
						<Image src="./help/2-3.png" alt="" />
					</section>
					<p>
						Bà con hãy chờ một vài giây để hệ thống đưa ra dự báo.
						Khi nào màn hình hiện thị kết quả tương tự với hình bên
						dưới thì coi như đã xong
					</p>
					<Image src="./help/2-4.png" alt="Kết quả sau cùng" />
				</div>
			</section>
			<section className="intro">
				<h2 className="font-subheading">2. Hướng dẫn đọc thông tin</h2>
				<Image src="./help/2-4.png" alt="Kết quả trả về" />
				<p>Các đối tượng dịch hại được liệt kê bên phải màn hình. </p>
				<p>
					Ở mỗi ô lớn sẽ là các thông tin chi tiết về các từng đối
					tượng: sâu, bệnh, v.v
				</p>
				<Image src="./help/3-1.png" alt="Đối tượng dịch hại" />

				<div className="grid gap-y-3 my-4">
					<section>
						<h3 className="font-medium">
							a. Xem thông tin chi tiết về đối tượng
						</h3>
						<p>
							Chọn hình chữ (i) bên góc trên, bên phải của ô. Để
							ẩn các mô tả, chọn vào biểu tượng (x)
						</p>
						<Image src="./help/3-2.png" alt="" />
					</section>
					<section>
						<h3 className="font-medium">
							b. Xem các biện pháp phòng trừ
						</h3>
						<p>
							Bà con bấm vào một trong các biện pháp phòng trừ để
							xem chi tiết
						</p>
						<Image src="./help/3-3.png" alt="" />
					</section>
				</div>
			</section>
		</div>
	);
}
export default HelpPage;
