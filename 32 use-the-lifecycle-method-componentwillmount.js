class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("Hello componentWillMount()");
  }
  render() {
    return <div />;
  }
}
