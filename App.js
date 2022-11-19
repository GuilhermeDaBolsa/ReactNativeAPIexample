import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostsList from './components/PostsList';
import ModalPostDetails from './components/ModalPostDetails';

export default function App() {

	const [loadingPosts, setLoadingPosts] = useState(false);
	const [posts, setPosts] = useState([]);

	const [showPostDetails, setShowPostDetails] = useState(false);
	const [selectedPost, setSelectedPost] = useState({});

	function selectPost(post) {
		setSelectedPost(post);
		openPostDetailsModal();
	}

	function openPostDetailsModal() {
		setShowPostDetails(true);
	}

	function closePostDetailsModal() {
		setShowPostDetails(false);
	}

	async function getPosts() {
		setLoadingPosts(true);

		try{
			const rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
			const response = await rawResponse.json();
			setPosts(response);
		}catch(error) {
			console.log("Error getting posts: " + error.msg);
		}

		setLoadingPosts(false);
	}

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />

			<View style={styles.headerContainer}>
				<View style={{paddingVertical: 8, flexDirection: 'row', width: 330, justifyContent: 'space-between', alignItems: 'center'}}>
					<Text style={{fontSize: 26}}>Posts</Text>

					<Pressable onPress={getPosts}>
						<View style={{backgroundColor: '#45a8de', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12}}>
							<Text style={{color: "white", fontWeight: 'bold'}}>LOAD POSTS</Text>
						</View>
					</Pressable>
				</View>
			</View>

			{ loadingPosts ? <View><Text>Loading posts...</Text></View> : '' }

			<View style={{flex: 1, width: "100%", alignItems: 'center'}}>
				<PostsList style={{width: "100%", height: "100%"}} posts={posts} onPressPost={selectPost}/>
			</View>

			<ModalPostDetails showModal={showPostDetails} post={selectedPost} closeModalFuntion={closePostDetailsModal}/>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	headerContainer: {
		width: "100%",
		backgroundColor: '#fff',
		alignItems: 'center',

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,

		elevation: 2,
	}
});
