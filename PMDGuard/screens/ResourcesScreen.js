import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';

import { styles } from '../styles/styles';
import { RESOURCES } from '../data/resources';

// screen to display the list of resources 
export default function ResourcesScreen({ onResourceRead, readArticles }) {

  // track which resource the user has selected to read
  const [selectedResource, setSelectedResource] = useState(null);

  // show selected article
  if (selectedResource !== null) {

    // get the selected resource data
    const resource = RESOURCES[selectedResource];

    return (
      <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>

        {/* back button to return to the resource screen */}
        <TouchableOpacity style={styles.backButton} onPress={() => setSelectedResource(null)}>
          <Text style={styles.backButtonText}> ← Back to Resources</Text>
        </TouchableOpacity>

        <View style={styles.resourceHeader}>

          <View style={{ flex: 1 }}>

            <Text style={styles.resourceCategory}>{resource.category}</Text>
            <Text style={styles.resourceTitle}>{resource.title}</Text>

          </View>

        </View>

        {/* display the resource content */}
        <View style={styles.resourceBody}>

          <Text style={styles.resourceContent}>{resource.content}</Text>

        </View>

      </ScrollView>
    );
  }

  // show resource list
  return (
    <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>

      <Text style={styles.sectionTitle}>Resource Library</Text>

      <Text style={styles.resourceSubtitle}>Tap any guide to read more</Text>

      {/* display the list of resources */}
      {RESOURCES.map((resource, index) => {

        // check if the resource has been read by the user
        const isRead = readArticles.has(index);
        return (
          // display the resource card with a tick if it has been read
          <TouchableOpacity key={resource.id} style={styles.resourceCard} onPress={() => { onResourceRead(index); setSelectedResource(index)}} activeOpacity={0.8}>

            <View style={styles.resourceNumber}>

              <Text style={styles.resourceNumberText}>{String(index + 1).padStart(2, '0')}</Text>

            </View>

            {/* display the resource information */}
            <View style={{ flex: 1, marginLeft: 14 }}>

              <Text style={styles.resourceCategory}>{resource.category}</Text>

              <Text style={styles.resourceTitle}>{resource.title}</Text>

              {/* show a preview of the resource content, limited to 2 lines */}
              <Text style={styles.resourcePreview} numberOfLines={2}>
                {resource.content
                  .replace(/\n/g, ' ')
                  .substring(0, 80)}…
              </Text>

            </View>

            {/* show a tick if the resource has been read */}
            {isRead ? (
              <Text style={styles.resourceReadTick}>✓</Text>
            ) : (
              <Text style={styles.resourceArrow}>›</Text>
            )}

          </TouchableOpacity>
        );
      })}

      <View style={{ height: 30 }} />

    </ScrollView>
  );
}