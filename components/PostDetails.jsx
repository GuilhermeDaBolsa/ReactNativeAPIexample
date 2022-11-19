import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function PostDetails(props) {

	const [loadingDeletingPost, setLoadingDeletingPost] = useState(false);

	async function deletePost(post) {
		if(loadingDeletingPost)
			return false;

		setLoadingDeletingPost(true);

		try{
			await fetch('https://jsonplaceholder.typicode.com/posts/' + post.id, { method: 'DELETE' });
			console.log("Post with id " + post.id + " was deleted!");
		}catch(error) {
			console.log("Error deleting post: " + error.msg);
		}

		setLoadingDeletingPost(false);
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>{props.post.title}</Text>
			</View>

			<View style={{marginBottom: 16}}>
				<Text style={{textAlign: 'justify'}}>{props.post.body}</Text>
			</View>

			<View style={styles.footerContainer}>
				<View style={styles.footerAvatar}>
					<View style={styles.footerAvatarCircle}></View>
					<Text>{props.post.userId}</Text>
				</View>

				<Pressable onPress={() => deletePost(props.post)}>
					<Text>{loadingDeletingPost ? 'Deleting...' : 'Delete'}</Text>
				</Pressable>
				
			</View>
		</View>
	);
	}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderWidth: 1,
		borderColor: "#aaaaaa",
		borderRadius: 18,
		paddingVertical: 12,
		paddingHorizontal: 14,
	},
	headerContainer: {
		marginBottom: 10
	},
	headerText: {
		fontSize: 19,
		textAlign: 'justify'
	},
	footerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	footerAvatar: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	footerAvatarCircle: {
		width: 20,
		height: 20,
		borderRadius: 15, 
		backgroundColor: '#434343',
		marginRight: 8
	}
  });
  