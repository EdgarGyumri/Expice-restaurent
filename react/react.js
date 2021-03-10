class Card extends React.Component {
	render() {
		return (
			<div className="foods-card">
				<div className="foods-card__header">
					<img className="foods-card__img" src={this.props.src} alt="" />
				</div>
				<div className="foods-card__body">
					<div className="foods-card__block">
						<h2 className="foods-body__title">
							Hand Sandwich
						</h2>
						<p className="foods-body__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. 
						</p>
					</div>
					<div className="foods-card__block">
						<span className="foods-body__price">$10.25</span>
					</div>
				</div>
			</div>
		);
	};
};

class CardsGroup extends React.Component {
	render() {
		return (
			<div className="foods-cards">
				<Card src={this.props.src1}/>
				<Card src={this.props.src2}/>
				<Card src={this.props.src3}/>
			</div>
		);
	};
};

class CardsWrapper extends React.Component {
	render() {
		return (
			<div className="foods-offer">
				<CardsGroup src1="img/background10.webp" src2="img/background11.webp" src3="img/background12.webp"/>
				<CardsGroup src1="img/background13.webp" src2="img/background14.webp" src3="img/background15.webp" />
			</div>
		)
	}
};

ReactDOM.render(<CardsWrapper />, document.querySelector('.foods-body'));