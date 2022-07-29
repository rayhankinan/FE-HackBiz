import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, List} from 'antd';
import { StandardLayout} from '../../layout/StandardLayout';
import React, { useState } from 'react';

const UserList = ['G'];
const ColorList = ['#f56a00'];
const GapList = [4, 3, 2, 1];

export const Profile: React.FC = () => {
    const [user, setUser] = useState(UserList[0]);
    const [color, setColor] = useState(ColorList[0]);
    const [gap, setGap] = useState(GapList[0]);
    const data = [
        {
            title: 'Email',
            desc: 'guestguest@example.com'
        },
        {
          title: 'Username',
          desc: 'guest123'
        },
        {
            title: 'Company Name',
            desc: 'The guest company'
        },
        {
            title: 'Role',
            desc: 'Student'
        },
        {
            title: 'Country',
            desc: 'Indonesia'
        },
        {
            title: 'Subscription',
            desc: 'Free'
        }
      ];

    const changeUser = () => {
        const index = UserList.indexOf(user);
        setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
        setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
    };

    return(
        
        <StandardLayout>
            {/* Icon profile */}
            <>
            <br /><br /><br />
            <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size={55} gap={gap}>
                {user}
            </Avatar>
            <Button
                
                size="small"
                style={{ margin: '0 16px', verticalAlign: 'middle' }}
                onClick={changeUser} > 
                Edit Profile
            </Button>
            </>

            {/* Data profile */}
            <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <span>
            <List.Item>
                <List.Item.Meta
                title={item.title}
                description={item.desc}
                />
            </List.Item>
            </span>
            )}
            />
        </StandardLayout>
    )
}