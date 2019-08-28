import React from 'react';
import { ILayoutProps } from './Layout.types';

export class Layout extends React.Component<ILayoutProps, any> {
    constructor(props: ILayoutProps) {
        super(props);
    }

    componentDidMount(): void {
        this.props.fetchUser();
        this.props.fetchNotifications();
    }

    getSitemapLinks(): JSX.Element[] | JSX.Element {
        return null;
    }

  

    renderSignedOutHeader() {
        const navLinks: any[] = [
            { name: 'Marketplace', url: '/' },
            { name: 'My services', url: '/my-services' },
            { name: 'My data', url: '/my-data' },
            { name: 'Support', url: '/support' }
        ];
        return (
            <h1>Header after login</h1>
        );
    }

    busyClass(isBusy: boolean) {
        return isBusy
            ? 'head-container busy'
            : 'head-container';
    }

    render() {
        const { user } = this.props;
        const sitemapLinks = this.getSitemapLinks();

        return (
            <div>
                
                <div className={this.busyClass(this.props.isBusy)}>
                    {this.renderSignedOutHeader()}
                </div>
                {this.props.children}
                <h1>Footer placeholder</h1>
            </div>
        );
    }
}