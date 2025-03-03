import { Skeleton } from "@mui/material";

function SkeletonImg({ src, alt }) {
	return (
		<div className="skeleton-img py-[20px] ">
			<div className="skeleton relative cursor-pointer hover:[&>a]:opacity-100 hover:[&>div>img]:scale-[1.05] [&>a]:opacity-0 h-[300px] overflow-hidden">
				<Skeleton
					variant="rectangular"
					width="100%"
					height="100%"
					animation="wave"
					classes={{ rectangular: "absolute top-0 left-0 -z-1" }}
				/>

				<div className="size-full flex items-center justify-center bg-secondary">
					<img
						src={src}
						alt={alt}
						className="size-full object-center object-contain transition-[scale_.7s]"
					/>
				</div>

				{alt ? (
					<a
						href={src}
						target="_blank"
						rel="noreferrer"
						title="Xem ảnh gốc"
						className="loader_temp text-[24px]/[1.2] text-white text-center absolute inset-0 bg-primary/70 size-full flex items-center justify-center line-clamp-2 backdrop-blur-lg transition-[opacity_.33s]"
					>
						{alt}
					</a>
				) : (
					<a
						href={src}
						target="_blank"
						rel="noreferrer"
						title="Xem ảnh gốc"
						className="loader_temp text-[24px]/[1.2] text-white text-center absolute inset-0 bg-primary/70 size-full flex items-center justify-center line-clamp-2 backdrop-blur-lg transition-[opacity_.33s]"
					>
						Xem ảnh gốc
					</a>
				)}
			</div>
		</div>
	);
}
export default SkeletonImg;
