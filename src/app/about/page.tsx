import Shimmer from "@/components/Shimmer";

export default async function Page() {

    return (
        <div className="container flex flex-col lg-flex-row mt-[100px] min-h-fit  mb-10 lg:px-40 p-4 text-sm  ">
            <div className="border-b-2 border-gray-500">
                <h1 className="text-5xl leading-10 mb-4 py-4">Giới thiệu</h1>
            </div>
            <div className="flex flex-col lg:flex-row py-4 lg:justify-between">
                <div className="lg:pr-8 flex flex-col items-center lg:basis-1/3">
                    <div className="rounded-full w-34 h-34 overflow-hidden">
                        {/* <Image
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt="Image of About Page"
                            placeholder = 'blur'
                            className="w-full h-auto"
                            src="https://tailwind-nextjs-starter-blog.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&w=256&q=75"
                        /> */}
                        <Shimmer
                            className="w-full h-auto object-cover"
                            alt="Image of About Page"
                            src="/catAbout.jpg"
                        />
                    </div>
                    <h2 className="text-2xl my-4">Weebuns</h2>
                    <p className="text-slate-500 text-base text-center">
                        &ldquo;Kiên trì trong học là chìa khóa mở ra cánh cửa của sự thành công. Những bước nhỏ hôm nay sẽ dẫn đến những thành tựu vĩ đại trong tương lai.&rdquo;
                    </p>
                </div>
                <div className=" lg:basis-2/3">
                    <p className="text-base text-center lg:text-start py-4">
                        Động lực xây dựng trang này là...
                    </p>
                    <p className="text-base text-center lg:text-start py-4">
                        Tại đây, bọn mình tạo ra một không gian đầy kết nối, nơi mọi cá nhân có thể cùng nhau học hỏi, chia sẻ và phát triển. Không chỉ là nơi trao đổi kiến thức, trang web này còn thúc đẩy sự nâng cao bản thân thông qua việc chia sẻ ý tưởng, kỹ năng và thói quen tích cực.
                    </p>
                    <p className="text-base text-center lg:text-start py-4">
                        Bọn mình cùng nhau trải nghiệm một môi trường tốt để phát triển và trau dồi bản thân. Tại đây, người học và người dạy có thể giao lưu, cùng thảo luận và xây dựng sự hiểu biết chung về các lĩnh vực đa dạng như khoa học, tiếng Anh, lập trình và cả việc xây dựng thói quen tích cực.
                    </p>
                    <p className="text-base text-center lg:text-start py-4">
                        Bọn mình tin rằng sự học hỏi không bao giờ có điểm dừng. Bọn mình cùng nhau lan tỏa tinh thần khám phá, tìm hiểu và phát triển để trở thành phiên bản tốt hơn của chính mình.
                    </p>
                </div>
            </div>
        </div>
    )
}

