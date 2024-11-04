import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  googleId: string;

  @Prop()
  username: string;

  @Prop()
  thumbnail: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
