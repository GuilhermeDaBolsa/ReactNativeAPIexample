import { ScrollView } from 'react-native';
import Post from './Post';

export default function PostsList(props) {
	return (
		<ScrollView style={props.style} contentContainerStyle={{width: "100%", justifyContent: 'center', alignItems: 'center', paddingTop: 12}}>
			{props.posts.map(e => <Post key={e.id} user={e.userId} text={e.title} onPress={() => props.onPressPost(e)}/> )}
		</ScrollView>
	);
}
