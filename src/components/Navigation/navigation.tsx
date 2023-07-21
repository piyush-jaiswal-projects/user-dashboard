import React from 'react'
import Panel from './panel';
import Menu from './menu';
import useWindowWidth from '../../hooks/useWindowWidth';

interface Props {
    handler: (newView: string) => void;
  }

export default function Navigation(props: Props) {
    const width = useWindowWidth()

    return (
        <>
            {width > 768 ? <Panel handler={props.handler} />
                :
                <Menu>
                    <Panel handler={props.handler} />
                </Menu>}
        </>
    )
}