import { StyleSheet } from "react-native";

/* 
 * #BEC5AD
 * #A4B494
 * #519872
 * #3B5249
 * #34252F
 * */

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34252F',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      title: { 
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: "#BEC5AD", 
      },
    
      subtitle:{ 
        fontSize: 15, 
        justifyContent: 'center',
        color: "#BEC5AD", 
      },

      container_dark:{ 
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title_dark:{ 
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
      },
      subtitle_dark: {
        fontSize: 15, 
        justifyContent: 'center',
      }
});
