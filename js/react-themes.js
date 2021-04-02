var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cssLink = document.querySelector('#css-link');
var headerNavigationImg = document.querySelector('.header-navigation__img');

var ChangeTheme = function (_React$Component) {
	_inherits(ChangeTheme, _React$Component);

	function ChangeTheme(props) {
		_classCallCheck(this, ChangeTheme);

		var _this = _possibleConstructorReturn(this, (ChangeTheme.__proto__ || Object.getPrototypeOf(ChangeTheme)).call(this, props));

		_this.state = { themeColor: 'red' };

		_this.changeTheme = _this.changeTheme.bind(_this);
		return _this;
	}

	_createClass(ChangeTheme, [{
		key: 'changeTheme',
		value: function changeTheme() {
			if (this.state.themeColor === 'red') {
				this.setState({
					themeColor: 'green'
				});

				cssLink.setAttribute('href', 'css/green-style.css');
				headerNavigationImg.setAttribute('src', 'img/green-logo.svg');
			} else if (this.state.themeColor === 'green') {
				this.setState({
					themeColor: 'red'
				});

				cssLink.setAttribute('href', 'css/red-style.css');
				headerNavigationImg.setAttribute('src', 'img/red-logo.svg');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement('img', { onClick: this.changeTheme, src: 'img/Left-carousel.png', alt: '' }),
				React.createElement('img', { onClick: this.changeTheme, src: 'img/Right-carousel.png', alt: '' })
			);
		}
	}]);

	return ChangeTheme;
}(React.Component);

ReactDOM.render(React.createElement(ChangeTheme, null), document.querySelector('.header-content__carousel'));