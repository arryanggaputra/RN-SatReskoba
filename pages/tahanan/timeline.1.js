import React from 'react';
import styles from '../stylesheet';
import {
    Text,
    ScrollView,
    RefreshControl
} from 'react-native';
import Timeline from 'react-native-timeline-listview'


class TahananTimeline extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Timeline',
    };

    constructor(){
        super()
        this.state = {
            data:[
                {description :'Selamat Datang', title : 'Bot Narkoba'}
            ],
            refreshing: false,
        }
    } 

    componentDidMount() {
        this.makeRemoteRequest()
    }

    makeRemoteRequest(){
        URL = `http://crimesocial.web.id/api/status`;
        var myHeaders = new Headers();
        myHeaders.append("token", "ambil_data_tahanan");
        
        fetch(URL,{
            headers: myHeaders,
        })
        .then(res => res.json())
        .then(res => {
            var statuses = res.data.map(function(data) {
                var myDate = new Date(data.created_at)
                console.log(myDate);
                 var person = { description: data.body, title:'Bot Narkoba' };
                 return person;
            });
            this.setState({
                data: this.state.page === 1 ? statuses : [...this.state.data, ...statuses],
                error: res.error || null,
                loading: false,
                refreshing: false
            });
        })
        .catch(error => {
            this.setState({ error, loading: false });
        });
          
            
    }
    

    handleRefresh = () => {
        this.setState(
            {
                data:[
                    {description :'Selamat Datang', title : 'Bot Narkoba', time:'00:00'}
                ],
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    }

    render() {     
        return (
            <ScrollView 
                enableEmptySections={true}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                }
                style={[styles.container, {backgroundColor:'#fff'}]}>
                <Timeline 
                    lineWidth={1}
                    circleSize={15}
                    innerCircle={'dot'}
                    circleColor='#fff'
                    lineColor='rgba(0,0,0,0.09)'
                    dotColor='#ccc'
                    separatorStyle={{
                        backgroundColor:'rgba(0,0,0,0.09)'
                    }}
                    timeStyle={{textAlign: 'center', backgroundColor:'#666', color:'white', paddingVertical:2, paddingHorizontal:2, borderRadius:13, fontSize:11}}
                    data={this.state.data} style={styles.timeline}
                />
                
            </ScrollView>
        );
    }

}

export default TahananTimeline;