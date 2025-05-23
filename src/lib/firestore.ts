import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function saveCropImageMetadata(imageUrl: string, diagnosisData: any) {
  const userId = auth.currentUser?.uid;
  console.log("Current User UID:", userId);

  if (!userId) throw new Error("User not authenticated");

  const docData = {
    user_id: userId,
    upload_timestamp: serverTimestamp(),
    image_url: imageUrl,
    diagnosis: diagnosisData.label,
    confidence_score: diagnosisData.confidence,
    severity_level: diagnosisData.severity,
  };

  // Debug log
  console.log("Writing to Firestore with:", docData);

  try {
    const docRef = await addDoc(collection(db, 'cropImages'), docData);
    console.log("Firestore write succeeded. Doc ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Firestore write failed:", error);
    throw error;
  }
}
