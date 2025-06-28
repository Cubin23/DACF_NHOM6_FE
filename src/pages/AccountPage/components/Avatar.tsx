interface AvatarProps {
  initials: string;
}

const Avatar = ({ initials }: AvatarProps) => (
  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-semibold text-xl">
    {initials}
  </div>
);

export default Avatar;