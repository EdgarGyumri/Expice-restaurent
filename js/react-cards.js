var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card() {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	}

	_createClass(Card, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "foods-card" },
				React.createElement(
					"div",
					{ className: "foods-card__header" },
					React.createElement("img", { className: "foods-card__img", src: this.props.src, alt: "" })
				),
				React.createElement(
					"div",
					{ className: "foods-card__body" },
					React.createElement(
						"div",
						{ className: "foods-card__block" },
						React.createElement(
							"h2",
							{ className: "foods-body__title" },
							"Hand Sandwich"
						),
						React.createElement(
							"p",
							{ className: "foods-body__text" },
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing."
						)
					),
					React.createElement(
						"div",
						{ className: "foods-card__block" },
						React.createElement(
							"span",
							{ className: "foods-body__price" },
							"$10.25"
						)
					)
				)
			);
		}
	}]);

	return Card;
}(React.Component);

;

var CardsGroup = function (_React$Component2) {
	_inherits(CardsGroup, _React$Component2);

	function CardsGroup() {
		_classCallCheck(this, CardsGroup);

		return _possibleConstructorReturn(this, (CardsGroup.__proto__ || Object.getPrototypeOf(CardsGroup)).apply(this, arguments));
	}

	_createClass(CardsGroup, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "foods-cards" },
				React.createElement(Card, { src: this.props.src1 }),
				React.createElement(Card, { src: this.props.src2 }),
				React.createElement(Card, { src: this.props.src3 })
			);
		}
	}]);

	return CardsGroup;
}(React.Component);

;

var CardsWrapper = function (_React$Component3) {
	_inherits(CardsWrapper, _React$Component3);

	function CardsWrapper() {
		_classCallCheck(this, CardsWrapper);

		return _possibleConstructorReturn(this, (CardsWrapper.__proto__ || Object.getPrototypeOf(CardsWrapper)).apply(this, arguments));
	}

	_createClass(CardsWrapper, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "foods-offer" },
				React.createElement(CardsGroup, { src1: "img/background10.webp", src2: "img/background11.webp", src3: "img/background12.webp" }),
				React.createElement(CardsGroup, { src1: "img/background13.webp", src2: "img/background14.webp", src3: "img/background15.webp" })
			);
		}
	}]);

	return CardsWrapper;
}(React.Component);

;

ReactDOM.render(React.createElement(CardsWrapper, null), document.querySelector('.foods-body'));