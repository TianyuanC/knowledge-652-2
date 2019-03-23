componentDidMount() {
    //batching
    this.setState({ a: 0 });
    this.setState({ b: 0 });
    this.setState({ a: 1 });

    //shallow update
    this.setState({ a: 0 });
    this.setState({ c: { d: 2 } }); // overwrites
    // comment out prev line, deep copy
    this.setState(prevState => ({ c: { ...prevState.c, d: 2 } })); 
}