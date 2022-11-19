import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Post(props) {
	return (
		<Pressable style={styles.container} onPress={props.onPress}>
			<View style={styles.headerContainer}>
				<View style={styles.headerAvatar}></View>
				<Text style={styles.headerText}>{props.user}</Text>
			</View>

			<View>
				<Text>{props.text}</Text>
			</View>
		</Pressable>
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
		marginBottom: 16,
		maxWidth: 330
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center'
,		marginBottom: 6
	},
	headerAvatar: {
		width: 25,
		height: 25,
		borderRadius: 15, 
		backgroundColor: '#434343',
		marginRight: 8
	},
	headerText: {
		fontSize: 18,
	}
  });
  