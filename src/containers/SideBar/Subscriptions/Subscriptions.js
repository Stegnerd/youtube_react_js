import React from 'react';
import {Subscription} from './Subscription/Subscription';
import {Divider} from 'semantic-ui-react';
import { SideBarHeader } from '../SideBarHeader/SideBarHeader';


export class Subscriptions extends React.Component {
    render () {
        return (
            <React.Fragment>
                <SideBarHeader title='Subscriptions'/>
                <Subscription label='MusicChannel' broadcasting/>
                <Subscription label='Coursea' amountNewVideos={10}/>
                <Subscription label='Tedx Talks' amountNewVideos={23}/>
                <Subscription label='Stanford IOS' amountNewVideos={14}/>
                <Subscription label='Udacity' amountNewVideos={114}/>
                <Divider/>
            </React.Fragment>
        );
    }
}