import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import Card from '../components/Card'

function Home({
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onAddToCart,
	isLoading,
}) {
	const renderItems = () => {
		const filtredItems = items.filter(item =>
			item.title.toLowerCase().includes(searchValue.toLowerCase())
		)
		return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
			<Card
				key={index}
				onFavorite={obj => onAddToFavorite(obj)}
				onPlus={obj => onAddToCart(obj)}
				loading={isLoading}
				{...item}
			/>
		))
	}

	React.useEffect(() => {
		AOS.init()
		AOS.refresh()
	})

	return (
		<div className="content p-40">
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				modules={[Navigation, A11y, Autoplay]}
				autoplay={{ delay: 3000 }}
				navigation={{ clickable: true }}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
			>
				<SwiperSlide style={{ width: '100%' }}>
					<div className="slide">
						<div className="slider">
							<div className="slide_text">
								<h1>
									<span>Stan Smith</span>,<br></br>Forever!
								</h1>
								<p className="slide_p">Купить</p>
							</div>
							<img src="/img/slide.png" alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide style={{ width: '100%' }}>
					<div className="slide">
						<div className="slider">
							<div className="slide_text">
								<h1>
									<span>Stan Smith</span>,<br></br>Forever!
								</h1>
								<p className="slide_p">Купить</p>
							</div>
							<img src="/img/slide.png" alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide style={{ width: '100%' }}>
					<div className="slide">
						<div className="slider">
							<div className="slide_text">
								<h1>
									<span>Stan Smith</span>,<br></br>Forever!
								</h1>
								<p className="slide_p">Купить</p>
							</div>
							<img src="/img/slide.png" alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide style={{ width: '100%' }}>
					<div className="slide">
						<div className="slider">
							<div className="slide_text">
								<h1>
									<span>Stan Smith</span>,<br></br>Forever!
								</h1>
								<p>Купить</p>
							</div>
							<img src="/img/slide.png" alt="" />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>

			<div className="heading d-flex align-center justify-between mb-40">
				<h1>
					{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
				</h1>
				<div className="search-block d-flex">
					<img src="img/search.svg" alt="Search" />
					{searchValue && (
						<img
							onClick={() => setSearchValue('')}
							className="clear cu-p"
							src="img/btn-remove.svg"
							alt="Clear"
						/>
					)}
					<input
						onChange={onChangeSearchInput}
						value={searchValue}
						placeholder="Поиск..."
					/>
				</div>
			</div>
			<div className="carter">{renderItems()}</div>
		</div>
	)
}

export default Home
