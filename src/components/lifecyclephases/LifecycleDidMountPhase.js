import React, { Component } from 'react';

class LifecycleDidMountPhase extends Component {

    constructor(props) {
        super(props);

        console.log('1. constructor', props.initialNames);

        this.state = {
            names: props.initialNames,
            mounted: false
        };

        window.addEventListener('mountedEvent', function() {
            console.log('Invoked when component has mounted');
            this.setState((prevState) => {
                var names = prevState.names.concat();

                names.push('Imogene');
                names.push('Yvette');
                names.push('Chavonda');
                names.push('Gregory');
                names.push('Marvin');

                return {
                    names: names
                };
            });

            this.setState({mounted: true})

        }.bind(this));

    }

    render() {
        console.log('2. render');

        var index = 0;
        return (
            <div>
                <div>
                    {this.state.names.map(
                        (name) => 
                            <div className="employee"
                                 key={index++}>
                                 {name}
                            </div>
                    )}
                </div>
                <div>
                    {this.state.mounted ? 
                        "Component mounted" : "Component not yet mounted"}
                </div>
            </div>
        );
    }

    // lifecycle area
    componentDidMount() {
        console.log('3. componentDidMount');

        setTimeout(function () {
            window.dispatchEvent(new Event('mountedEvent'));
        }, 5000);
    }
}

export default LifecycleDidMountPhase;